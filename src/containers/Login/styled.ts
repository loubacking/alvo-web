import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const LoginContainer = styled.div`
  height: 400px;
  width: 400px;
  margin: 60px 0;
  border-radius: 30px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 70px;
  aspect-ratio: 3;
`;

export const SuggestionText = styled(Link)`
  font-family: Arial, sans-serif;
  font-size: 13px;
  letter-spacing: 0.5;
`;
