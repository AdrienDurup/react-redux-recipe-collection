import axios from 'axios';

// API route
import host from './host';

// types
import { recipesT } from '../actions/types';

// action
import { actionGetFavs, actionSetList } from '../actions/recipes';

const recipesMW = (store) => (next) => async (action) => {
  let res;
  switch (action.type) {
    case recipesT.GET_RECIPES:
      /* we let action pass first to set loading status to true */
      next(action);
      const { token } = store.getState().user;
      /* if user token exists */
      if (token) {
        /* get user favorites */
        store.dispatch(actionGetFavs());
      }
      else {
        try {
          // res = await axios.get('https://api.spoonacular.com/recipes/complexSearch&apiKey=acdcdf6f79654ee2b6e8b7a2ab2c815c');
          res = await axios.get(host.recipes);
          const newAction = {
            ...action,
            payload: res.data,
          };
          console.log('GET DATA', newAction);
          store.dispatch(actionSetList(res.data));/* always set loading to false */
        }
        catch (e) {
          console.error(e.message);
        }
      }

      break;

    case recipesT.GET_FAVS:
      try {
        const { token } = store.getState().user;
        console.log('myToken is', token);
        res = await axios({ /* get favorites from API */
          method: 'GET',
          url: host.favs,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        /* update recipes list with favs only */
        store.dispatch(actionSetList(res.data.favorites));
      }
      catch (e) {
        console.error(e);
        // store.dispatch(actionAuthentFail());
      }

      break;

    default:
      next(action);
      break;
  }
};

export default recipesMW;
