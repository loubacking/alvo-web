import { Link } from 'react-router-dom';
import { Button } from '../../../index';
import { StyledLink } from './styled';

export const NotLoggedUser = () => {
  return (
    <div className="row align-items-center">
      <StyledLink to={{ pathname: '/login' }}>
        <span style={{ marginRight: 20 }}>Entrar</span>
      </StyledLink>
      <Link to={{ pathname: '/register' }}>
        <Button title="Cadastrar" />
      </Link>
    </div>
  )
}