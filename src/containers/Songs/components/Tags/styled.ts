import styled from 'styled-components';

type TagType = {
  dark: boolean;
};

export const Tag = styled.div<TagType>`
  padding: 0 10px;
  line-height: 22px;
  text-align: center;
  background: ${(props) => (props.dark ? '#5959BE' : 'transparent')};
  color: ${(props) => (props.dark ? '#fff' : '#424242')};
  border: 1px solid ${(props) => (props.dark ? '#fff' : '#ebecec')};
  border-radius: 12px;
  font-family: Arial;
  font-size: 12px;
  cursor: pointer;
  width: 80px;
  margin-left: 15px;
  @media (max-width: 450px) {
    margin-left: 0px;
    margin-right: 15px;
  }
`;
