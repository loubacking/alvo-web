import React from 'react';
import { Col } from 'react-bootstrap';
import { HeaderContainer, Logo, Container } from './styled';
import logo from '../../assets/images/logo-alvo1.png';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <Col md={{ span: 10, offset: 2 }}>
                    <Link to={{ pathname: "/" }}>
                        <Logo src={logo} alt="Alvo Cifras Logo" />
                    </Link>
                </Col>
            </Container>
        </HeaderContainer>
    );
}

export default Header;