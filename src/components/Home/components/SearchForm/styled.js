import styled, { keyframes } from 'styled-components';

export const InputGroup = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
`;

export const SearchInput = styled.input`
    display: block;
    width: 100%;
    height: calc(2.5rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-indent: 35px;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 25px;
    -webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    border-bottom-left-radius: ${({ isSuggestion }) => isSuggestion ? 0 : "25px" };
    border-bottom-right-radius: ${({ isSuggestion }) => isSuggestion ? 0 : "25px" };
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-55%);
  color: #5959be;
  font-size: 16px;
`;

const height = keyframes`
    from {
        height: 0px;
    }

    to {
        height: 200px;
    }
`

export const SuggestionBox = styled.div`
    max-height: 433px;
    text-align: left;
    top: 40px;
    border-radius: 0 0 25px 25px;
    left: 0;
    background: #FFF;
    position: absolute;
    border: solid 1px #E0E0E0;
    z-index: 10;
    padding: 10px;
    transition: opacity .2s,visibility 0s;
    display: block;
    width: 100%;
    height: 200px;
    border-top: 0
    animation: ${height} 0.4s linear;
`;

export const ArtistTitle = styled.small`
    position: absolute;
    font-size: 20px;
    color: #424242;
    font-family: Arial;
    font-weight: 600;
    left: 20px;
`;

export const LineBreak = styled.hr`
    margin-top: -10px;
    margin-bottom: 10px;
`;

const appear = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

export const Image = styled.div`
    background-image: url(https://i.ytimg.com/vi/QGNsLtOa3Uo/maxresdefault.jpg);
    height: 35px;
    width: 35px;
    border-radius: 50px;
    position: absolute;
    top: 50px;
    left: 18px;
    background-size: 75px;
    background-position: center;
    background-repeat: no-repeat;
    animation: ${appear} 0.75s linear;
`;

export const ArtistName = styled.div`
    position: absolute;
    top: 60px;
    left: 70px;
    font-size: 15px;
    color: #424242;
    font-family: Arial, sans-serif;
    font-weight: 600;
    letter-spacing: 0;
    animation: ${appear} 0.75s linear;
`;

