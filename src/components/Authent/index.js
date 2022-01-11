// Import from packages
import { useDispatch, useSelector } from 'react-redux';

// Imports
// import PropTypes from 'prop-types';

// Components
import LoginForm from '../LoginForm';

// actions
import { actionAuthentSubmit, actionDisconnect, actionSetAuthentField } from '../../actions/user';

const Authent = () => {
  const token = useSelector((state) => state.user.token);
  const emailInput = useSelector((state) => state.user.emailInput);
  const passwordInput = useSelector((state) => state.user.passwordInput);
  const pseudo = useSelector((state) => state.user.pseudo);
  const loggedMessage = `Bienvenue ${pseudo} !`;

  /* We need to pass a boolean for isLogged, based on token which is string */
  const isLogged = token ? true : false;

  const dispatch = useDispatch();
  const changeField = (value, field) => {
    dispatch(actionSetAuthentField(field, value));
  };
  const handleLogin = () => {
    dispatch(actionAuthentSubmit());
  };
  const handleLogout = () => {
    dispatch(actionDisconnect());
  };
  return (
    <LoginForm
      email={emailInput}
      password={passwordInput}
      changeField={changeField}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      isLogged={isLogged}
      loggedMessage={loggedMessage}
    />
  );
};

// Authent.propTypes = {

// };

export default Authent;
