import axios from 'axios';

// types
import { userT } from '../actions/types';

//action
import { actionAuthentFail, actionConnect, actionSetListWithFavs } from '../actions/user';

// host
import host from './host';

const authentMW = (store) => (next) => async (action) => {

  let res;/* axios request result */

  switch (action.type) {
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
        store.dispatch(actionConnect({ token, pseudo }));
        localStorage.setItem('token', JSON.stringify({ token, pseudo }));
      }
      catch (e) {
        console.error(e);
        store.dispatch(actionAuthentFail());
      }
      break;

    case userT.AUTHENT_WITH_TOKEN:
      try {
        const { token, pseudo } = JSON.parse(localStorage.getItem('token'));
        console.log("myToken is", token);
        res = await axios({
          method: 'GET',
          url: host.favs,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("CONNECTION WITH TOKEN ?", res.data);
        store.dispatch(actionSetListWithFavs(res.data.favorites));
        /* pass pseudo to state */
        action.payload = pseudo;
        next(action);
      }
      catch (e) {
        console.error(e);
        store.dispatch(actionAuthentFail());
      }

      break;

    case userT.DISCONNECT:
      localStorage.removeItem('token');
      // store.dispatch(actionSetTokenStorageTrigger(false));
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default authentMW;
