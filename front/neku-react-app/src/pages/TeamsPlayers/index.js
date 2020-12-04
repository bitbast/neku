import React, {Component} from "react"
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./TeamsPlayers.css";

class TeamsPlayers extends Component {
    render() {
        return(
            <Container fluid className="profileContainer">
                <Row className="d-flex justify-content-center align-items-center playerNameBox">
                    <Col xs="12" md="6" className= "d-flex justify-content-center align-items-center">
                        <p className= "playerName">Equipos!</p>
                    </Col>
                    <Col xs="12" md="4" className="d-flex justify-content-center align-items-center">
                            <img max width="100%" src="https://www.techgames.com.mx/wp-content/uploads/2019/08/Telcel-LVP-Mexico-equipos.jpg" alt="Gamer img" />
                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default TeamsPlayers