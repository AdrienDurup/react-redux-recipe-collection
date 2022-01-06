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
        res = await axios.get('https://api.spoonacular.com/recipes/complexSearch&apiKey=acdcdf6f79654ee2b6e8b7a2ab2c815c');
        const newAction = {
          ...action,
          payload: res.data,
        };
        console.log("GET DATA",newAction);
        next(newAction);
      }
      catch (e) {
        console.error(e.message);
      }
      break;

    default:
      break;
  }
};

export default  [recipesMW ];
