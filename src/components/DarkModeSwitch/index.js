// Imports
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionSetIsDark } from '../../actions/recipes';

// Components

// Styling
import './style.scss';

const DarkModeSwitch = () => {
  const isDark = useSelector((state) => (state.settings.isDark));
  console.log('isDark', isDark);
  const dispatch = useDispatch();
  const toggleDarkMode = () => {
    dispatch(actionSetIsDark());
  };
  useEffect(() => {
    if (isDark) document.body.classList.add('--dark-mode');
    else document.body.classList.remove('--dark-mode');
  }, [isDark]);
  return (
    <div className="switch__wrapper">
      <label htmlFor="dark-mode" className="switch__label">
        <input type="checkbox" className="switch" value={isDark} name="dark-mode" onChange={toggleDarkMode} />
        <span className="switch__handle" />
      </label>
      <span className="switch__label__tag">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

DarkModeSwitch.propTypes = {

};

export default DarkModeSwitch;
