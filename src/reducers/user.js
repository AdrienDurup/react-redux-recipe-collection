import { userT } from '../actions/types';
import { actionAuthentSubmit } from '../actions/user';

export const initialState = {
  isAuthent: false,
  token: '',
  emailInput: '',
  passwordInput: '',
  pseudo: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case userT.UPDATE_AUTHENT_FIELD:
      const stateCopy = { ...state };
      /* we format property name the way we want,
      instead of changing it in our imported LoginForm Component  */
      stateCopy[`${action.payload.field}Input`] = action.payload.value;
      return stateCopy;
    // return {
    //   ...state,
    //   ...action.payload, /* {[field] : value} */
    // };

    case userT.AUTHENT_FAILURE:
      return {
        ...state,
        passwordInput: '',
      };

    case userT.CONNECT:
      return {
        ...state,
        // isAuthent: true,
        ...action.payload, /* { token, pseudo } = action.payload; */
        passwordInput: '',
      };

    case userT.DISCONNECT:
      return {
        ...state,
        // isAuthent: false,
        token: '',
        pseudo: '',
      };

    default:
      return state;
  }
};

export default reducer;
