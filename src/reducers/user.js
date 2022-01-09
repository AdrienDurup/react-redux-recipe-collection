import { userT } from '../actions/types';

export const initialState = {
  isAuthent: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case userT.UPDATE_AUTHENT_FIELD:
      const stateCopy = { ...state };
      stateCopy[action.payload.field] = action.payload.value;
      return stateCopy;
      // return {
      //   ...state,
      //   isAuthent: true,
      // };

    case userT.AUTHENT:
      return {
        ...state,
        isAuthent: true,
      };

    case userT.DISCONNECT:
      return {
        ...state,
        isAuthent: false,
      };

    default:
      return state;
  }
};

export default reducer;
