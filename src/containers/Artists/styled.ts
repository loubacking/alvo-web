import styled from "styled-components";

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
  margin-top: 5%;
`;

export const SongsWrapper = styled.div`
  position: relative;
  margin-bottom: 10%;
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

export const Index = styled.div`
  position: relative;
  float: left;
  margin-right: 20px;
  color: #808080;
`;
