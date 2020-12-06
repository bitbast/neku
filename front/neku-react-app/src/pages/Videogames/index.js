import React, {Component} from "react"
import { Container, Row, Col} from "reactstrap";
import VideogamesCard from "../../components/VideogamesCard"
import 'bootstrap/dist/css/bootstrap.css';
import "./Videogames.css"

class Videogames extends Component {
    render() {
        return(
            <Container fluid className="teamsContainer">
                <Row className="d-flex justify-content-center align-items-center sectionNameBox">
                <Col xs="12" md="6" className= "heading">
                        <h1>JUEGOS</h1>
                        <h4>La razón de ser de un gamer</h4>
                    </Col>
                    <Col xs="12" md="4" className="d-flex justify-content-center align-items-center">
                            <img max width="100%" height="250" src="https://assets.eleconomista.com.mx/__export/1581119523386/sites/eleconomista/img/2020/02/07/que-son-esports.jpg_554688468.jpg" alt="Gamer img" />
                    </Col> 
                </Row>
                <Row >
                    <VideogamesCard></VideogamesCard>
                    <VideogamesCard></VideogamesCard>
                    <VideogamesCard></VideogamesCard>
                    <VideogamesCard></VideogamesCard>
                    <VideogamesCard></VideogamesCard>
                    <VideogamesCard></VideogamesCard>
                    <VideogamesCard></VideogamesCard>
                    <VideogamesCard></VideogamesCard>
                </Row>
            </Container>
        )
    }
}

export default Videogames