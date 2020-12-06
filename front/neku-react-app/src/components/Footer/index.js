import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// ------------- CSS ------------- //
import './Footer.css'

// ------------- SMALLER COMPONENTS ------------- //
import nekuLogoNav from "../../svg/neku-logo_grad-white-text-white.svg";
import SocialIcons from "../SocialIcons"


const Footer = (props) => {
  return (
    <Container fluid>
      <Row className="footer">
        <Col className="nekuLogo" xs={12} sm={12} md={6} lg={3}>
          <img src={nekuLogoNav} alt="neku logo navbar" />
        </Col>
        <Col xs={12} sm={12} md={6}  lg={{ size: 5, offset: 1 }}>
          <Nav className="footerLinks">
            <NavItem>
              <NavLink href="/Categories">
                <p>Explora Categorías</p>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Teams">
                <p>Equipos</p>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Gamers">
                <p>Jugadores</p>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Events">
                <p>Eventos</p>
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AboutUs">
                <p>Acerca de nosotros</p>
                </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col id="socialRow" xs={12} sm={12} md={12} lg={3}>
          <SocialIcons />
        </Col>
      </Row>
      <Row className="banner">
        <Col id="avisoBanner">
          <a href="/Aviso">
            <p id="aviso">Aviso de Privacidad</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;