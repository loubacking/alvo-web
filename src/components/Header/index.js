import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { HeaderContainer, HeaderText, Logo } from './styled';
import logo from '../../assets/images/logo-alvo1.png';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <Col md={{ span: 10, offset: 2 }}>
                    <Link to={{pathname: "/"}}>
                        <Logo src={logo} />
                    </Link>
                </Col>
                <Col style={{ textAlign: "center", marginTop: 10 }}>
                    <HeaderText> Siga alvo nas redes </HeaderText>
                </Col>
            </HeaderContainer>
        )
    }
}

export default Header;