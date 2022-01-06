import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import DarkModeSwitch from '../DarkModeSwitch';

import './style.scss';

const Menu = () => {
  const recipes = useSelector((state) => state.recipes.list);
  return (
    <>
      <nav className="menu">
        <NavLink
          className="menu-link menu-link--active"
          to="/"
        >
          Accueil
        </NavLink>
        {recipes.map((recipe) => (
          <NavLink
            key={recipe.id}
            className="menu-link"
            to={`/recipe/${recipe.slug}`}
          >
            {recipe.title}
          </NavLink>
        ))}
        <DarkModeSwitch />
      </nav>

    </>
  );
};

export default Menu;
