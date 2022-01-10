import axios from 'axios';
import { actionGetRecipes } from '../actions/recipes';

// types
import { userT } from '../actions/types';

//action
import { actionAuthentFail, actionConnect, actionSetListWithFavs, actionSetFoundUser, actionConnectWithToken } from '../actions/user';

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
        store.dispatch(actionSetFoundUser(userPayload));/* write found user in state */
        store.dispatch(actionConnectWithToken()); /* get data from API via token in state */
      }
      else {
       store.dispatch(actionGetRecipes());
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

    case userT.AUTHENT_WITH_TOKEN:
      try {
        const { token } = store.getState().user;
        console.log("myToken is", token);
        res = await axios({ /* get favorites from API */
          method: 'GET',
          url: host.favs,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        /* update recipes list with favs only */
        store.dispatch(actionSetListWithFavs(res.data.favorites));
      }
      catch (e) {
        console.error(e);
        // store.dispatch(actionAuthentFail());
      }

      break;

    case userT.DISCONNECT:
      localStorage.removeItem('userInfo');
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default authentMW;
