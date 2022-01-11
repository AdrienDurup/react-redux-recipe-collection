export const recipesT = {
  GET_RECIPES: 'orecipe/recipes/get-recipes',
  GET_FAVS: 'orecipe/recipest/get-favs',
  SET_RECIPES: 'orecipe/app/recipes/favs/set',
};

export const appT = {
  PROP_IS_LOADING: 'orecipe/app/prop/is-loading/set',
};

export const settingsT = {
  TOGGLE_DARK_MODE: 'orecipe/app/darkmode/toggle',
};

export const userT = {
  AUTHENT: 'orecipe/app/authent/submit',
  DISCONNECT: 'orecipe/app/authent/disconnect',
  CONNECT: 'orecipe/app/authent/connect',
  AUTHENT_FAILURE: 'orecipe/app/authent/fail',
  UPDATE_AUTHENT_FIELD: 'orecipe/app/authent/field/update',
  SET_TKN_STORAGE_TRIGGER: 'orecipe/app/authent/token/should-store',
  CHECK_STORAGE: 'orecipe/app/user/localstorage/check',
  SET_USER_LOCAL: 'orecipe/app/user/set-from-storage',
};
