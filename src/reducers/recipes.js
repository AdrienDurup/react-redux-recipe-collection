import data from 'src/data';
import { recipesT, appT } from '../actions/types';

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

    default:
      return state;
  }
};

export default reducer;
