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



function App(props) {
  const { loading } = useSelector((state) => (state.recipes));
  const { recipes } = useSelector((state) => state);
  console.log(loading, recipes.list);
  const dispatch = useDispatch();
  /* we get all recipies at start */
  useEffect(() => {
    console.log("useEffect");
    dispatch(actionGetRecipes());
  }, []);
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
                recipes.map(({ slug, id }) => (
                  <Route key={id} path={`/recipe/${slug}`} element={<Recipe slug={slug} />} />
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

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
