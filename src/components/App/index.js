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
import { actionCheckUserInStorage } from '../../actions/user';

import './style.scss';

function App() {
  const { loading } = useSelector((state) => (state.recipes));
  const dispatch = useDispatch();

  useEffect(() => {
    /* if user is stored in localStorage, load data in state */
    dispatch(actionCheckUserInStorage());
    /* load all recipes or user favs, depending on presence of a token */
    dispatch(actionGetRecipes());
  }, []);

  /* if data is not fetched yet, return loader component */
  if (loading) {
    // if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
