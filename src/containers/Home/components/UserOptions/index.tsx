import React, { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwt from 'jwt-decode';

import user from '../../../../assets/images/userIcon.png';
import { saveTokenAndUserInfo } from '../../../../actions';

import {
  Container,
  ContainerTittle,
  Image,
  MenuContainer,
  MenuItem,
  Title,
} from './styled';
import Cookies from 'universal-cookie';
import { AUTH_TOKEN } from '../../../../reducers/types';

const UserOptions = () => {
  const cookies = new Cookies();
  const history = useHistory();
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [name, setName] = useState('');

  const registerSong = () => history.push('/admin/songs');
  const registerArtist = () => history.push('/admin/artists');

  useEffect(() => {
    const token = cookies.get('AUTH_TOKEN');
    const { fullName } = jwt(token) as {email: string, fullName: string};
    setName(fullName.split(' ')[0]);
  }, []);

  const logOut = () => {
    dispatch(saveTokenAndUserInfo(''));
    cookies.remove(AUTH_TOKEN);
  };

  const handleShowMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      return;
    }
    setShowMenu(true);
  };

  return (
    <>
      <Container onClick={handleShowMenu}>
        <Image src={user} alt="Alvo Cifras Logo" />
        <ContainerTittle>
          <Title style={{ color: '#5959BE' }}>{name}</Title>
          <FaAngleDown color="#5959BE" />
        </ContainerTittle>
      </Container>

      {showMenu && (
        <MenuContainer>
          <MenuItem onClick={registerSong}>Cadastrar música</MenuItem>
          <MenuItem onClick={registerArtist}>Cadastrar artista</MenuItem>
          <MenuItem onClick={logOut}>Sair</MenuItem>
        </MenuContainer>
      )}
    </>
  );
};

export default UserOptions;
