import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 60px;
`;

export const ContainerTittle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
  font-family: Arial, sans-serif;
  font-size: 13px;
  letter-spacing: 0.5;
  margin-left: 8px;
  margin-right: 15px;
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 6rem;
  right: 7rem;
  width: 135px;
  background: white;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 2;
`;

export const MenuItem = styled.div`
  font-family: Arial, sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #e2e2e2;
  }
`;
