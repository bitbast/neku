import React, { useState } from 'react';

// REACTSTRAP //
import {
  // ALL CONTAINERS //
  Container,
  Row,
  Col,
  
  // LATEST NEWS //
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,

  // CATEGORIES AND RANKERS //
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

// REACT BOOTSTRAP //
import { 
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';


// COMPONENTES //
import nekuLogoNav from "../../svg/neku-logo_grad-white-text-white.svg";
import nekuLogoFooter from "../../svg/neku-logo_grad-white-text-white.svg"
import SocialIcons from '../SocialIcons';
import { BsController } from 'react-icons/bs'
import { IconContext } from "react-icons";

// CSS //
import './Navigation.css'


// JSON CAROUSEL //
const items = [
  {
    src: 'https://picsum.photos/id/5/700/300',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://picsum.photos/id/7/700/300',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://picsum.photos/id/99/700/300',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Navigation = (props) => {
  // NAVBAR //
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  // NEWS CAROUSEL //
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      {/* --- NAVBAR --- */}
      <Navbar className="navbar" expand="sm">
        <Navbar.Brand className="navbar-brand" href="#home">
          <img src={nekuLogoNav} className="nekulogoNav" alt="neku logo navbar" />
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav">
          <IconContext.Provider value={{ color:"white", size:"1.5em"}}>
            <BsController />
          </IconContext.Provider>
        </Navbar.Toggle>
        <Navbar.Collapse className="navMenu" id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="navlinks" href="#home">
              <p>Juegos</p>
            </Nav.Link>
            <Nav.Link className="navlinks" href="#link">
              <p>Equipos</p>
            </Nav.Link>
            <Nav.Link className="navlinks" href="#link">
              <p>Gamers</p>
            </Nav.Link>
            <Nav.Link className="navlinks" href="#link">
              <p>Blog</p>
            </Nav.Link>
          </Nav>
          <Form inline className="px-3">
            <FormControl size="sm" type="text" className="searchInput mr-sm-2 p-0" />
            <Button style={{"background-color":"#F61667", "border":"0"}} size="md" className="btn">
              <p>BUSCA</p>
            </Button>
          </Form>
          <NavDropdown class="dropdownProfile" title={
            <IconContext.Provider value={{ color:"white", size:"1.5em"}}>
              <BsController />
            </IconContext.Provider>
          } id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <p>Perfil</p>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <p>Favoritos</p>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <p>Equipo</p>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              <p>Ajustes</p>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>

      {/* --- HEADER --- */}
      <Container fluid className="header">
        <Row>
          <Col className="Headings">
            <h1>BIENVENIDO</h1>
            <h4>Are. You. Ready?</h4>
          </Col>
        </Row>
        <Row className="homeCategory">
          <Col className="catCard" xs="6" sm="3" md="3" lg="3">
            <Card className="cardContainer">
              <CardImg className="categoryImg" top width="100%" src="/front/neku-react-app/src/images/neku-category-cards-juegos.png" alt="Card image cap" />
              <CardTitle className="titleBox" tag="h5">Juegos</CardTitle>
            </Card>
          </Col>
          <Col className="catCard" xs="6" sm="3" md="3" lg="3">
            <Card className="cardContainer">
              <CardImg className="categoryImg" top width="100%" src="/front/neku-react-app/src/images/neku-category-cards-equipos.png" alt="Card image cap" />
              <CardTitle className="titleBox" tag="h5">Equipos</CardTitle>
            </Card>          
          </Col>
          <Col className="catCard" xs="6" sm="3" md="3" lg="3">
            <Card className="cardContainer">
              <CardImg className="categoryImg" top width="100%" src="/front/neku-react-app/src/images/neku-category-cards-gamers.png" alt="Card image cap" />
              <CardTitle className="titleBox" tag="h5">Gamers</CardTitle>
            </Card>
          </Col>
          <Col className="catCard" xs="6" sm="3" md="3" lg="3">
            <Card className="cardContainer">
              <CardImg className="categoryImg" top width="100%" src="/front/neku-react-app/src/images/neku-category-cards-extras.png" alt="Card image cap" />
              <CardTitle className="titleBox" tag="h5">Extras</CardTitle>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* --- MAIN - NEWS --- */}
      <Container fluid>
        <Row className="Headings">
          <Col>
              <h1>LO ÚLTIMO</h1>
              <h4>Qué está pasando en el mundo gamer?</h4>
          </Col>
        </Row>
        <Row>
          <Col className="newsCarousel">
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}>
              <CarouselIndicators className="slides" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
          </Col>
        </Row>
      </Container>

      {/* --- MAIN - TORNEOS --- */}
      <Container fluid>
        <Row className="Headings">
          <Col>
            <h1>TORNEOS</h1>
            <h4>Quién se apunta?</h4>
          </Col>
        </Row>
        <Row className="tourStat">
          <Col className="tourCard" xs="6" sm="6" md="6" lg="7">
            <Card className="tourContainer">
              <CardImg className="tourImg" top width="100%" src="https://picsum.photos/id/247/300/200" alt="Card image cap" />
              <CardTitle className="tourTitleBox" tag="h5">EN PROGRESO</CardTitle>
            </Card>
          </Col>
          <Col className="tourCard" xs="6" sm="6" md="6" lg="5">
            <Card className="tourContainer">
              <CardImg className="tourImg" top width="100%" src="https://picsum.photos/id/37/300/200" alt="Card image cap" />
              <CardTitle className="tourTitleBox" tag="h5">CONCLUIDOS</CardTitle>
            </Card>          
          </Col>
        </Row>
      </Container>

      {/* --- MAIN - RANKERS --- */}
      <Container fluid>
        <Row className="Headings">
          <Col>
            <h1>RANKERS</h1>
            <h4>El TOP de la comunidad</h4>
          </Col>
        </Row>
        <Row className="rankers">
          <Col className="rankCard col-3 col-sm-3 col-md-3 col-lg-3 px-1">
            <Card className="rankContainer">
              <CardImg className="rankImg" top width="100%" src="https://picsum.photos/id/247/300/200" alt="Card image cap" />
              <CardTitle className="rankTitleBox" tag="h5">Luis Bastida</CardTitle>
            </Card>
          </Col>
          <Col className="rankCard col-3 col-sm-3 col-md-3 col-lg-3 px-1">
            <Card className="rankContainer">
              <CardImg className="rankImg" top width="100%" src="https://picsum.photos/id/37/300/200" alt="Card image cap" />
              <CardTitle className="rankTitleBox" tag="h5">Lucho Gomez</CardTitle>
            </Card>          
          </Col>
          <Col className="rankCard col-3 col-sm-3 col-md-3 col-lg-3 px-1">
            <Card className="rankContainer">
              <CardImg className="rankImg" top width="100%" src="https://picsum.photos/id/247/300/200" alt="Card image cap" />
              <CardTitle className="rankTitleBox" tag="h5">Carl Haggan</CardTitle>
            </Card>
          </Col>
          <Col className="rankCard col-3 col-sm-3 col-md-3 col-lg-3 px-1">
            <Card className="rankContainer">
              <CardImg className="rankImg" top width="100%" src="https://picsum.photos/id/37/300/200" alt="Card image cap" />
              <CardTitle className="rankTitleBox" tag="h5">Patricio Nueva</CardTitle>
            </Card>          
          </Col>
        </Row>
      </Container>

      {/* --- FOOTER --- */}
      <Container fluid className="footer">
        <Row>
          <Col xs="12" sm="6" md="4" lg="4">
            <img src={nekuLogoFooter} className="nekuLogoFooter" alt="nekuLogoFooter" />
          </Col>
          <Col xs="12" sm="6" md="8" lg="8" className="footerLinks">
            <p href="http://">Crea contenido</p>
            <p href="http://">Explora categorías</p>
            <p href="http://">Equipos</p>
            <p href="http://">Jugadores</p>
            <p href="http://">Eventos</p>
            <p href="http://">Acerca de nosotros</p>
          </Col>
        </Row>
        <Row className="w-100">
          <Col className="socialIcons">
            <SocialIcons />
          </Col>
        </Row>
      </Container>
      <Container fluid className="w-100">
        <Row>
          <Col className="aviso">
            <p>AVISO DE PRIVACIDAD</p>
            <p>© Copyright 2020</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navigation;