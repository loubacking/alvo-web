import styled from 'styled-components';

type ContainerType = {
  absolute?: boolean;
};

export const FooterContainer = styled.footer<ContainerType>`
  position: ${(props) => (props.absolute ? 'fixed' : 'relative')};
  bottom: 0;
  background-color: #212121;
  width: 100%;
  height: 80px;
  @media (max-width: 450px) {
    position: ${(props) => (props.absolute ? 'fixed' : 'relative')};
  }
`;

export const FooterText = styled.span`
  color: #fff;
  font-family: Arial Bold-MT, sans-serif;
`;
