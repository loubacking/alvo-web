import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FooterContainer, FooterText } from './styled';

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <Col style={{ textAlign: "center", marginTop: 10 }}>
                    <FooterText> Siga alvo nas redes </FooterText>
                    <br />
                    <FaFacebookF style={{ color: '#fff', margin: 10 }} />
                    <FaInstagram style={{ color: '#fff', margin: 10 }} />
                </Col>
            </FooterContainer>
        )
    }
}

export default Footer;