import axios from 'axios';

// types
import { recipesT } from '../actions/types';

//action
import { actionSetPropsLoading } from '../actions/recipes';

const recipesMW = (store) => (next) => async (action) => {
  let res;
  switch (action.type) {

    case recipesT.GET_RECIPES:
      console.log("get ?");
      store.dispatch(actionSetPropsLoading(true));
      try {
        // res = await axios.get('https://api.spoonacular.com/recipes/complexSearch&apiKey=acdcdf6f79654ee2b6e8b7a2ab2c815c');
        res = await axios.get('http://localhost:3001/recipes');
        const newAction = {
          ...action,
          payload: res.data,
        };
        console.log("GET DATA", newAction);
        next(newAction);
      }
      catch (e) {
        console.error(e.message);
      }
      break;

    default:
      next(action);
      break;
  }
};

export default [recipesMW];
