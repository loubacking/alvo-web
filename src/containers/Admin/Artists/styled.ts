import styled from 'styled-components';

export const Image = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 80px;
  position: relative;
  object-fit: cover;
`;

export const ArtistWrapper = styled.div`
  position: relative;
  text-align: center;
  margin-top: 100px;
`;

export const SongsWrapper = styled.div`
  position: relative;
`;

export const ArtistName = styled.div`
  position: relative;
  font-family: Arial;
  font-size: 24px;
  color: #424242;
  letter-spacing: 0;
  top: 10px;
  font-weight: 600;
`;

export const SongName = styled.div`
  position: relative;
  font-family: Arial;
  font-size: 14px;
  color: #424242;
  letter-spacing: 0;
  top: 10px;
  font-weight: 600;
  margin: 20px;
`;

export const Title = styled.div`
  position: relative;
  font-family: Arial;
  font-size: 18px;
  color: #424242;
  letter-spacing: 0;
  top: 10px;
  font-weight: 600;
  margin: 20px 0;
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 10px;
`;

export const FormWrapper = styled.div`
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
`;
