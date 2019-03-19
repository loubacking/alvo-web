import styled from 'styled-components'

export const Image = styled.img`
    height: 160px;
    width: 160px;
    border-radius: 80px;
    position: relative;
    object-fit: cover;
    -webkit-box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.5);
    box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.5);
`;

export const ArtistWrapper = styled.div`
    position: relative;
    text-align: left;
    margin-top: 100px;
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
`;

export const SongName = styled.div`
    margin-top: 140px;
    position: relative;
    text-align: left;
    font-family: Arial;
    font-size: 32px;
    color: #5959BE;
    letter-spacing: 0;
    font-weight: 600;
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
    line-height: 25px;
    font-weight: 600;
    white-space: pre-line;
    margin-bottom: 120px;
`;
