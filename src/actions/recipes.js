import { recipesT, appT, settingsT } from "./types";

/* query all recipes/fav recipes list in state */
export const actionGetRecipes = () => ({
  type: recipesT.GET_RECIPES,
});

export const actionSetPropsLoading = (payload) => ({
  type: appT.PROP_IS_LOADING,
  payload, /* boolean for loading property */
});

/* Toggle dark mode */
export const actionSetIsDark = () => ({
  type: settingsT.TOGGLE_DARK_MODE,
});

/* query fav recipes list in state */
export const actionGetFavs = () => ({
  type: recipesT.GET_FAVS,
});

/* write recipes list in state */
export const actionSetList = (payload) => ({
  type: recipesT.SET_RECIPES,
  payload,
});
