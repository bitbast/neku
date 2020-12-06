import React, { useState } from 'react';

// REACTSTRAP //
import {
  // ALL CONTAINERS //
  Container,
  Row,
  Col,

  CardImg,
  CardTitle,
} from 'reactstrap';

// REACT BOOTSTRAP //
import { 
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Table,
  Button,
  Carousel,
  CardDeck,
  Card
} from 'react-bootstrap';


// COMPONENTES //
import nekuLogoNav from "../../svg/neku-logo_grad-white-text-white.svg";
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
          <NavDropdown class="dropdownProfile order-2" title={
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
              <CardImg className="categoryImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-juegos.png?raw=true" alt="Card image cat" />
            </Card>
          </Col>
          <Col className="catCard" xs="6" sm="3" md="3" lg="3">
            <Card className="cardContainer">
              <CardImg className="categoryImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-equipos.png?raw=true" alt="Card image cat" />
            </Card>          
          </Col>
          <Col className="catCard" xs="6" sm="3" md="3" lg="3">
            <Card className="cardContainer">
              <CardImg className="categoryImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-gamers.png?raw=true" alt="Card image cat" />
            </Card>
          </Col>
          <Col className="catCard" xs="6" sm="3" md="3" lg="3">
            <Card className="cardContainer">
              <CardImg className="categoryImg" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-extras.png?raw=true" alt="Card image cat" />
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
            <Carousel interval={1000000}>
              <Carousel.Item className="carCaption">
                <img
                  className="d-block w-100"
                  src="https://fortnitebr.news/wp-content/uploads/2020/12/Fortnite-Mando-1000x600-364x205.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>The Mandalorian en Fortnite</h3>
                  <p>La Temporada 5 del Capítulo 2 ya está disponible</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carCaption">
                <img
                  className="d-block w-100"
                  src="https://s.yimg.com/ny/api/res/1.2/BLrNn0JfDybDKB.YzCIotA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/cosmopolitan_438/c2f19de4a5740bf2988b43a6858b4742"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Congresista revela que jugar LoL la ayudó mentalmente para su trabajo</h3>
                  <p>Alexandria Ocasio-Cortez estaba lista para los conflictos políticos</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carCaption">
                <img
                  className="d-block w-100"
                  src="https://cdn1.dotesports.com/wp-content/uploads/2020/03/31162532/EUdqZwpXQAEmVop.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Pokémon GO Niantic volvió a aumentar el límite de almacenamiento</h3>
                  <p>El juego recibió varias mejoras para que administres tu colección de Pokémon</p>
                </Carousel.Caption>
              </Carousel.Item>
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
          <Col className="tourCard" xs="12" sm="12" md="6" lg="7">
            <Card className="tourContainer">
              <CardImg className="tourImg" top width="100%" src="https://www.dailyesports.gg/wp-content/uploads/2019/07/lol_front-800x400.jpg" alt="Card image cap" />
              <CardTitle className="tourTitleBox-p" tag="h5">EN PROGRESO</CardTitle>
              <Table className="tourProgress" striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Alias</th>
                    <th>Equipo</th>
                    <th>Puntos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Luis Bastida</td>
                    <td>BitBast</td>
                    <td>Koders</td>
                    <td className="text-right">3,985</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Luis Gomez</td>
                    <td>Lucho</td>
                    <td>Koders</td>
                    <td className="text-right">3,183</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Carlos Silva</td>
                    <td>DeMentor</td>
                    <td>Backend</td>
                    <td className="text-right">2,535</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Lionel Messi</td>
                    <td>Messi</td>
                    <td>Barça</td>
                    <td className="text-right">2,244</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col className="tourCard" xs="12" sm="12" md="6" lg="5">
            <Card className="tourContainer">
              <CardTitle className="tourTitleBox-c" tag="h5">CONCLUIDOS</CardTitle>
              <Carousel interval={100000} className="tourCarousel">
                <Carousel.Item className="tourCaption">
                  <img
                    className="d-block w-100"
                    src="https://cdn2.unrealengine.com/11br-competitive-evergreen-blue-newsheader-1920x1080-957497914.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption className="carTitles">
                    <h3>FORTNITE</h3>
                  </Carousel.Caption>
                  <Table className="tourConclude" striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Alias</th>
                        <th>Equipo</th>
                        <th>Puntos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Luis Bastida</td>
                        <td>BitBast</td>
                        <td>Koders</td>
                        <td className="text-right">3,985</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Luis Gomez</td>
                        <td>Lucho</td>
                        <td>Koders</td>
                        <td className="text-right">3,183</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Carlos Silva</td>
                        <td>DeMentor</td>
                        <td>Backend</td>
                        <td className="text-right">2,535</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Lionel Messi</td>
                        <td>Messi</td>
                        <td>Barça</td>
                        <td className="text-right">2,244</td>
                      </tr>
                    </tbody>
                  </Table>
                </Carousel.Item>
                <Carousel.Item className="tourCaption">
                  <img
                    className="d-block w-100"
                    src="https://cdn.game.tv/game-tv-content/images_3/e412a7c3eb24413110362fd06686cc92/Banners.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption className="carTitles">
                    <h3>AMONG US</h3>
                  </Carousel.Caption>
                  <Table className="tourConclude" striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Alias</th>
                        <th>Equipo</th>
                        <th>Puntos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Luis Bastida</td>
                        <td>BitBast</td>
                        <td>Koders</td>
                        <td className="text-right">3,985</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Luis Gomez</td>
                        <td>Lucho</td>
                        <td>Koders</td>
                        <td className="text-right">3,183</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Carlos Silva</td>
                        <td>DeMentor</td>
                        <td>Backend</td>
                        <td className="text-right">2,535</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Lionel Messi</td>
                        <td>Messi</td>
                        <td>Barça</td>
                        <td className="text-right">2,244</td>
                      </tr>
                    </tbody>
                  </Table>
                </Carousel.Item>
                <Carousel.Item className="tourCaption">
                  <img
                    className="d-block w-100"
                    src="https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2019/09/10/smash-ultimate-european-circuit-times-tournaments-details-header_feature.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption className="carTitles">
                    <h3>SUPER SMASH BROTHERS ULTIMATE</h3>
                  </Carousel.Caption>
                  <Table className="tourConclude" striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Alias</th>
                        <th>Equipo</th>
                        <th>Puntos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Luis Bastida</td>
                        <td>BitBast</td>
                        <td>Koders</td>
                        <td className="text-right">3,985</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Luis Gomez</td>
                        <td>Lucho</td>
                        <td>Koders</td>
                        <td className="text-right">3,183</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Carlos Silva</td>
                        <td>DeMentor</td>
                        <td>Backend</td>
                        <td className="text-right">2,535</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Lionel Messi</td>
                        <td>Messi</td>
                        <td>Barça</td>
                        <td className="text-right">2,244</td>
                      </tr>
                    </tbody>
                  </Table>
                </Carousel.Item>
              </Carousel>
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
          <Col>
            <CardDeck className="rankCard">
              <Card>
                <Card.Img variant="top" src="https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2976853.png" />
                <Card.Body>
                  <Card.Title><h5>Allan Negrete</h5></Card.Title>
                  <Card.Text>
                    <p>nickname</p>
                  </Card.Text>
                  <Table hover size="sm">
                    <thead>
                      <tr>
                        <th>Juego</th>
                        <th>Ranking</th>
                        <th>Tiempo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>League of Legends</td>
                        <td>4</td>
                        <td>3,000 hrs</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button variant="outline-dark">VER PERFIL</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="rankerCard">
                <Card.Img variant="top" src="https://a.espncdn.com/i/headshots/college-football/players/full/4565313.png" />
                <Card.Body>
                  <Card.Title><h5>Bryan Torres</h5></Card.Title>
                  <Card.Text>
                    <p>nickname</p>
                  </Card.Text>
                  <Table hover size="sm">
                    <thead>
                      <tr>
                        <th>Juego</th>
                        <th>Ranking</th>
                        <th>Tiempo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>League of Legends</td>
                        <td>4</td>
                        <td>3,000 hrs</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button variant="outline-dark">VER PERFIL</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="rankerCard">
                <Card.Img variant="top" src="https://a.espncdn.com/i/headshots/nhl/players/full/3941970.png" />
                <Card.Body>
                  <Card.Title><h5>Caldiano Sampsa</h5></Card.Title>
                  <Card.Text>
                    <p>nickname</p>
                  </Card.Text>
                  <Table hover size="sm">
                    <thead>
                      <tr>
                        <th>Juego</th>
                        <th>Ranking</th>
                        <th>Tiempo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>League of Legends</td>
                        <td>4</td>
                        <td>3,000 hrs</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button variant="outline-dark">VER PERFIL</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="rankerCard">
                <Card.Img variant="top" src="https://a.espncdn.com/i/headshots/nhl/players/full/3114770.png" />
                <Card.Body>
                  <Card.Title><h5>Enrique Gonzalez</h5></Card.Title>
                  <Card.Text>
                    <p>nickname</p>
                  </Card.Text>
                  <Table hover size="sm">
                    <thead>
                      <tr>
                        <th>Juego</th>
                        <th>Ranking</th>
                        <th>Tiempo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>League of Legends</td>
                        <td>4</td>
                        <td>3,000 hrs</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button variant="outline-dark">VER PERFIL</Button>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
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