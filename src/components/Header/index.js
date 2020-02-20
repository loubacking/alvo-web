import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { HeaderContainer, Logo, Container } from './styled';
import logo from '../../assets/images/logo-alvo1.png';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <Container>
                <Col md={{ span: 10, offset: 2 }}>
                    <Link to={{pathname: "/"}}>
                        <Logo src={logo} />
                    </Link>
                </Col>
                </Container>
            </HeaderContainer>
        )
    }
}

export default Header;