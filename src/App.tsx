import { useEffect } from 'react';
import './App.css';
import HttpsRedirect from 'react-https-redirect';
import Routes from './routes';
import Cookies from 'universal-cookie';
import { AUTH_TOKEN } from './reducers/types';
import { useDispatch } from 'react-redux';
import { saveTokenAndUserInfo } from './actions';

const App = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();

  useEffect(() => {
    getAuthTokenInCookies();
  }, []);

  const getAuthTokenInCookies = () => {
    const authToken = cookies.get(AUTH_TOKEN);

    if (authToken) {
      dispatch(saveTokenAndUserInfo(authToken));
    }
  };

  return (
    <HttpsRedirect>
      <Routes />
    </HttpsRedirect>
  );
};

export default App;
