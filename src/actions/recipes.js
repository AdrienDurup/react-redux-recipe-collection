import { recipesT, appT } from "./types";

export const actionGetRecipes = () => ({
  type: recipesT.GET_RECIPES,
});

export const actionSetPropsLoading = (payload) => ({
  type: appT.PROP_IS_LOADING,
  payload, /* boolean for loading property */
});
