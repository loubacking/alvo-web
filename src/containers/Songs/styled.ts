import styled from "styled-components";
import { Row } from "react-bootstrap";

export const Image = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 80px;
  position: relative;
  object-fit: cover;
  -webkit-box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.5);
`;

export const ArtistWrapper = styled.div`
  position: relative;
  text-align: left;
  margin-top: 60px;

  @media (max-width: 450px) {
    margin-top: 20px;
    text-align: center;
  }
`;

export const SongsWrapper = styled.div`
  position: relative;
`;

export const ArtistName = styled.div`
  position: relative;
  font-family: Arial;
  font-size: 18px;
  color: #424242;
  letter-spacing: 0;
  font-weight: 300;

  @media (max-width: 450px) {
    text-align: center;
  }
`;

export const SongName = styled.div`
  margin-top: 100px;
  position: relative;
  text-align: left;
  font-family: Arial;
  font-size: 32px;
  color: #5959be;
  letter-spacing: 0;
  font-weight: 600;
  @media (max-width: 450px) {
    margin-top: 20px;
    text-align: center;
  }
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

export const TagsWrapper = styled.div`
  padding: 15px 0;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const Lyrics = styled.div`
  font-family: Arial;
  font-size: 13px;
  color: #424242;
  line-height: normal;
  font-weight: 600;
  white-space: pre-line;
  padding-bottom: 120px;
`;

export const Chords = styled.div`
  font-family: Arial;
  font-size: 13px;
  color: #424242;
  line-height: normal;
  font-weight: 600;
  white-space: pre-line;
  margin-bottom: 120px;
`;

export const RowStyled = styled(Row)`
  @media (max-width: 450px) {
    justify-content: center;
  }
`;
