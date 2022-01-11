import axios from 'axios';

// types
import { userT } from '../actions/types';

//action
import { actionAuthentFail, actionConnect } from '../actions/user';
import { actionGetFavs, actionGetRecipes } from '../actions/recipes';

// host
import host from './host';

const authentMW = (store) => (next) => async (action) => {

  let res;/* axios request result */

  switch (action.type) {
    case userT.CHECK_STORAGE:
      const stored = localStorage.getItem('userInfo');
      let userPayload;
      if (stored) {
        userPayload = JSON.parse(stored);
        console.log("userPayload", userPayload);
        store.dispatch(actionConnect(userPayload)); /* write user in state */
      }

      break;

    case userT.AUTHENT:
      const { emailInput, passwordInput } = store.getState().user;
      try {
        res = await axios.post(host.login, {
          email: emailInput,
          password: passwordInput,
        });
        /* if authentication worked, execute this, else error is thrown */
        const { token, pseudo } = res.data;
        console.log("login return from API", res.data);
        store.dispatch(actionConnect({ token, pseudo })); /* write user in state */
        localStorage.setItem('userInfo', JSON.stringify({ token, pseudo })); /* store it locally */
      }
      catch (e) {
        console.error(e);
        store.dispatch(actionAuthentFail());
      }
      break;

    case userT.CONNECT:
      next(action); /* we let payload token/pseudo write en state */
      /* we then update list with actionGetFavs which does not set loading state */
      store.dispatch(actionGetFavs());
      break;

    case userT.DISCONNECT:
      /* let action pass in order to reset user info */
      next(action);
      localStorage.removeItem('userInfo');
      /* we then can get all recipes (not possible if token exists) */
      store.dispatch(actionGetRecipes());
      break;

    default:
      next(action);
      break;
  }
};

export default authentMW;
