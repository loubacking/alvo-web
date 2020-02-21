import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  top: 0;
  background-color: #f5f5f5;
  width: 100%;
  height: 80px;
  z-index: 100;
  @media (max-width: 450px) {
    height: 60px;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  background-color: #f5f5f5;
  width: 100%;
  height: 80px;
  z-index: 100;
  @media (max-width: 450px) {
    height: 60px;
  }
`;

export const HeaderText = styled.span`
  color: #fff;
  font-family: Arial Bold-MT, sans-serif;
`;

export const Logo = styled.img`
  margin-top: 10px;
  width: 180px;
  @media (max-width: 450px) {
    width: 160px;
    margin-top: 5px;
  }
`;
