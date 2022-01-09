import LoginForm from '../LoginForm';

import './style.scss';
import logo from '../../assets/logo.png';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { actionAuthentSubmit, actionDisconnect, actionSetAuthentField } from '../../actions/user';

const AppHeader = () => {
  const isLogged = useSelector((state) => state.user.isAuthent);
  const emailInput = useSelector((state) => state.user.emailInput);
  const pwdInput = useSelector((state) => state.user.passwordInput);
  const loggedMessage = useSelector((state) => state.user.loggedMessage);
  const dispatch = useDispatch();
  const changeField = (field,value) => {
    dispatch(actionSetAuthentField(field,value));
  };
  const handleLogin = () => {
    dispatch(actionAuthentSubmit());
  };
  const handleLogout = () => {
    dispatch(actionDisconnect());
  };
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={emailInput}
        password={pwdInput}
        changeField={changeField}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        isLogged={isLogged}
        loggedMessage={loggedMessage}
      />
    </header>
  )
};

export default AppHeader;
