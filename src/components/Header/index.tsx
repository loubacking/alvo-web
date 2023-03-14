import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Container, Logo } from './styled';
import logo from '../../assets/images/logo-alvo1.png';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_TOKEN } from '../../reducers/types';
import { saveTokenAndUserInfo } from '../../actions';
import { LoggedUser } from './components/LoggedUser';
import { NotLoggedUser } from './components/NotLoggedUser';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const history = useHistory();
  const { userInfo } = useSelector((state: any) => state.unique);

  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const { fullName } = userInfo ?? { fullName: '' };
    setName(fullName.split(' ')[0]);
  }, []);

  const onLogOut = () => {
    dispatch(saveTokenAndUserInfo(''));
    cookies.remove(AUTH_TOKEN);
    setName(null);
  };

  return (
    <Container>
      <Logo
        src={logo}
        alt="Alvo Cifras Logo"
        onClick={() => history.push('/')}
      />

      {name ? (
        <LoggedUser userName={name} onLogOut={onLogOut} />
      ) : (
        <NotLoggedUser />
      )}
    </Container>
  );
};

export default Header;
