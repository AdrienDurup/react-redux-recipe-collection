import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';
import Loading from './Loading';

// actions
import { actionGetRecipes } from '../../actions/recipes';

import './style.scss';
import { actionConnectWithToken, actionCheckUserInStorage } from '../../actions/user';

function App() {
  const { loading } = useSelector((state) => (state.recipes));
  const recipes = useSelector((state) => state.recipes.list);
  const token = useSelector((state) => state.user.token);
  console.log(loading, recipes.list);
  const dispatch = useDispatch();

  /* if user is stored in localStorage, load data in state */
  useEffect(() => {
    dispatch(actionCheckUserInStorage());
  }, []);

  /* if token exists get fav, else display all recipes */
  useEffect(() => {
    if (token) {
      dispatch(actionConnectWithToken());
    }
    else {
      dispatch(actionGetRecipes());
    }
  }, [token]);

  /* if data is not fetched yet, return loader component */
  if (loading) {
    // if (props.loading) {
    return <Loading />;
  }
  return (
    <>
      {
        recipes.length > 0
        && (
          <div className="app">
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              {
                recipes.map(({ id }) => (
                  <Route key={id} path="/recipe/:slug" element={<Recipe />} />
                ))
              }
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        )
      }
    </>

  );
}

// App.propTypes = {
//   loading: PropTypes.bool,
// };

// App.defaultProps = {
//   loading: false,
// };

export default App;


/* Dés que mon app est prête
dispatcher une action supplémentaire 'CHECK_USER_LOCAL'
Mon middlewware doit réagir à cette action
Regarder dans le localStorage si un user existe
Et si c'est le cas, il faut prévenir le reducer
qu'on a déjà toutes les infos de l'user pour qu'il les mette dans le state
Il faut donc une action 'FOUND_SAVED_USER' qui contienne les datas sur l'user
pour que le reducer puisse mettre à jour le state user */
