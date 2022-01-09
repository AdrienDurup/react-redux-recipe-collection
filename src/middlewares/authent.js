import axios from 'axios';

// types
import { userT } from '../actions/types';

//action
import { actionAuthentFail, actionAuthentSubmit, actionConnect } from '../actions/user';

// host
import host from './host';

const authentMW = (store) => (next) => async (action) => {
  switch (action.type) {
    case userT.AUTHENT:
      const { emailInput, passwordInput } = store.getState().user;
      try {
        const res = await axios.post(host.login, {
          email: emailInput,
          password: passwordInput,
        });
        /* if authentication worked, execute this, else error is thrown */
        const { token, pseudo } = res.data;
        console.log("login return from API", res.data);
        store.dispatch(actionConnect({token, pseudo}));
      }
      catch (e) {
        console.error(e);
        store.dispatch(actionAuthentFail());
      }
      break;
    default:
      next(action);
      break;
  }
};

export default authentMW;
