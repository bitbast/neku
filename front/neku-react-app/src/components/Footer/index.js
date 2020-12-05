import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// ------------- CSS ------------- //
import './Footer.css'

// ------------- SMALLER COMPONENTS ------------- //
import nekuLogoNav from "../../svg/neku-logo_grad-white-text-white.svg";
import SocialIcons from "../SocialIcons"


const Example = (props) => {
  return (
    <Container fluid>
      <Row xs="1" sm="2" md="3" lg="3">
        <Col className="nekuLogo">
          <img src={nekuLogoNav} alt="neku logo navbar" />
        </Col>
        <Col>
        <Nav className="footerLinks">
          <NavItem>
            <NavLink href="#">
              <p href="http://">Explora categorías</p>
              </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <p href="http://">Equipos</p>
              </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <p href="http://">Jugadores</p>
              </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <p href="http://">Eventos</p>
              </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <p href="http://">Acerca de nosotros</p>
              </NavLink>
          </NavItem>
        </Nav>
        </Col>
      </Row>
      <Row>
        <Col id="socialRow">
          <SocialIcons />
        </Col>
      </Row>
      <Row className="banner">
        <Col id="avisoBanner">
          <p id="aviso">Aviso de Privacidad</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Example;