import { userT } from '../actions/types';

export const initialState = {
  isAuthent: false,
  token: '',
  emailInput: '',
  passwordInput: '',
  loggedMessage: '',
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
    //   isAuthent: true,
    // };

    case userT.AUTHENT_FAILURE:
      return {
        ...state,
        passwordInput: '',
      };

    case userT.CONNECT:
      const { token, pseudo } = action.payload;
      return {
        ...state,
        isAuthent: true,
        token,
        pseudo,
        loggedMessage: `Bienvenue ${pseudo}`,
        passwordInput: '',
      };

    case userT.DISCONNECT:
      return {
        ...state,
        isAuthent: false,
        token: '',
        pseudo: '',
        loggedMessage: '',
      };

    default:
      return state;
  }
};

export default reducer;
