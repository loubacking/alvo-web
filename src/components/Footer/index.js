import React from "react";
import { Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FooterContainer, FooterText } from "./styled";

const Footer = ({ absolute }) => {
  return (
    <FooterContainer absolute={absolute}>
      <Col style={{ textAlign: "center", paddingTop: 10 }}>
        <FooterText> Siga alvo nas redes </FooterText>
        <br />
        <a 
          href="https://www.facebook.com/Alvo-Da-Mocidade-486291074740913/" 
          aria-label="Facebook"
        >
          <FaFacebookF style={{ color: "#fff", margin: 10 }} />
        </a>
        <a 
          href="https://www.instagram.com/alvodamocidade_/" 
          aria-label="Instagram"
        >
          <FaInstagram style={{ color: "#fff", margin: 10 }} />
        </a>
      </Col>
    </FooterContainer>
  );
};

export default Footer;
