import { recipesT, appT, userT } from '../actions/types';

export const initialState = {
  list: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case recipesT.GET_RECIPES:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };

    case appT.PROP_IS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };


    case userT.SET_RECIPES:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
