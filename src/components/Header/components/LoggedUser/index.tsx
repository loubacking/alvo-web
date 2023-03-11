import { useEffect, useRef, useState } from 'react';
import {
  Container,
  ContainerTittle,
  Image,
  MenuContainer,
  MenuItem,
  Title
} from './styled';
import { FaAngleDown } from 'react-icons/fa';
import userIcon from '../../../../assets/images/userIcon.png';
import { useHistory } from 'react-router-dom';

interface Params { 
  userName: string, 
  onLogOut: () => void 
}

export const LoggedUser = ({ userName, onLogOut }: Params) => {
  const menuRef = useRef(null);
  const [name, setName] = useState('');
  const history = useHistory();

  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);  
  const toggle = () => setIsOpen(!isOpen);

  useEffect(listenForOutsideClicks(
    listening,
    setListening,
    menuRef,
    setIsOpen,
  ));

  useEffect(() => {
    setName(userName.split(' ')[0]);
  }, [userName]);

  const registerSong = () => history.push('/admin/songs');
  const registerArtist = () => history.push('/admin/artists');

  return (
    <div ref={menuRef}>
      <Container onClick={toggle}>
          <Image src={userIcon} alt="Avatar" />
          <ContainerTittle>
            <Title style={{ color: '#5959BE' }}>{name}</Title>
            <FaAngleDown color="#5959BE" />
          </ContainerTittle>
      </Container>

      {isOpen && (
          <MenuContainer>
            <MenuItem onClick={registerSong}>Cadastrar música</MenuItem>
            <MenuItem onClick={registerArtist}>Cadastrar artista</MenuItem>
            <MenuItem onClick={onLogOut}>Sair</MenuItem>
          </MenuContainer>
      )}
  </div>
  )
}

const listenForOutsideClicks = (
  listening,
  setListening,
  menuRef,
  setIsOpen
) => {
  return () => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);
    [`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        const cur = menuRef.current;
        const node = evt.target;
        if (cur.contains(node)) return;
        setIsOpen(false);
      });
    });
  };
}
