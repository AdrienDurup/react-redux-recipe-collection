import { settingsT } from '../actions/types';

export const initialState = {
  isDark: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case settingsT.TOGGLE_DARK_MODE:
      return {
        ...state,
        isDark: !state.isDark,
      };

    default:
      return state;
  }
};

export default reducer;
