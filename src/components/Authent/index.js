// Import from packages
import { useDispatch, useSelector } from 'react-redux';

// Imports
// import PropTypes from 'prop-types';

// Components
import LoginForm from '../LoginForm';

// actions
import { actionAuthentSubmit, actionDisconnect, actionSetAuthentField } from '../../actions/user';

const Authent = () => {
  const isLogged = useSelector((state) => state.user.isAuthent);
  const emailInput = useSelector((state) => state.user.emailInput);
  const passwordInput = useSelector((state) => state.user.passwordInput);
  const loggedMessage = useSelector((state) => state.user.loggedMessage);
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
