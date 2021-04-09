import styled from 'styled-components';

export const Image = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50px;
  position: relative;
  left: 18px;
  object-fit: cover;
`;

export const ArtistName = styled.div`
  position: relative;
  left: 70px;
  font-size: 15px;
  color: #424242;
  font-family: Arial, sans-serif;
  font-weight: 600;
  letter-spacing: 0;
  top: -30px;
`;

export const ArtistWrapper = styled.div`
  position: relative;
  top: -35px;
  height: 45px;
  &: hover {
    cursor: pointer;
  }
`;
