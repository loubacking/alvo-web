import { Col } from 'react-bootstrap';
import styled from 'styled-components';

export const Logo = styled.img`
  width: 180px;
  aspect-ratio: 3;
`;

export const Title = styled.h1`
  font-family: Arial, sans-serif;
  font-weight: 600;
  font-size: 40px;
  color: #424242;
  letter-spacing: 1.23px;
  line-height: 1.2;
  @media (max-width: 450px) {
    font-size: 30px;
  }
`;

export const HeaderContainer = styled(Col)`
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
