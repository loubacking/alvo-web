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
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-indent: 35px;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 25px;
  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-bottom-left-radius: ${({ isSuggestion }) => (isSuggestion ? 0 : '25px')};
  border-bottom-right-radius: ${({ isSuggestion }) => (isSuggestion ? 0 : '25px')};
  outline: none;
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
`;

export const SuggestionBox = styled.div`
    max-height: 360px;
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
    height: 360px;
    border-top: 0
    animation: ${height} 0s linear;
`;

export const ArtistTitle = styled.small`
  position: relative;
  font-size: 20px;
  color: #424242;
  font-family: Arial;
  font-weight: 600;
  left: 20px;
  top: -25px;
`;

export const SongTitle = styled.small`
  position: relative;
  font-size: 20px;
  color: #424242;
  font-family: Arial;
  font-weight: 600;
  left: 20px;
  top: -40px;
`;

export const LineBreak = styled.hr`
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const TextTip = styled.div`
  position: relative;
  font-size: 14px;
  color: #696969;
  font-family: Arial;
  top: -25px;
  left: 20px;
  margin: 5px 0;
  letter-spacing: 0;
`;

export const ArtistWrapper = styled.div`
  position: relative;
`;

export const SongWrapper = styled.div`
  position: relative;
`;

export const SkeletonWrapper = styled.div`
  position: relative;
  flex-direction: row;
  top: -25px;
  left: 20px;
  margin: 5px 0;
  height: 54px;
`;

export const SkeletonName = styled.div`
  position: relative;
  top: -42px;
`;
