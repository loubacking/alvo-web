import styled from 'styled-components';

type ContainerType = {
  background?: string;
  hoverBackground?: string;
  marginTop?: number;
  marginBottom?: number; 
};

type TitleType = {
  fontSize?: number;
  color?: string;
};

export const ContainerButton = styled.div<ContainerType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 40px;
  padding: 0 10px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;;
  background: ${(props) => (props.background ? props.background : '#5959be')};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.hoverBackground ? props.hoverBackground : '#5959bee8'};
  }
`;

export const TitleButton = styled.div<TitleType>`
  font-family: Arial, sans-serif;
  font-weight: 600;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)}px;
  color: ${(props) => (props.color ? props.color : '#FFFFFF')};
  letter-spacing: 1.23px;
`;
