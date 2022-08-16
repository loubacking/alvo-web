import styled from 'styled-components';

type CheckType = {
  success?: boolean;
};

export const CheckMessageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckIcon = styled.span<CheckType>`
  color: ${(props) => (props.success ? '#21AB2F' : '#CC3A3A')};
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-right: 15px;
`;

export const CheckMessage = styled.div<CheckType>`
  font-family: Arial, sans-serif;
  font-size: 15px;
  margin: 5px 0;
  color: ${(props) => (props.success ? '#21AB2F' : '#CC3A3A')};
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
