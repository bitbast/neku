import React, {Component} from "react"
import { Container, Row, Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./AllPlayers.css"
import GamersCardAllPlayers from "../../components/GamersCardAllPlayers";

class AllPlayers extends Component {
    render() {
        return(
            <Container fluid className="teamsContainer">
                <Row className="d-flex justify-content-center align-items-center sectionNameBox">
                    <Col xs="12" md="6" className= "heading">
                        <h1>GAMERS!</h1>
                        <h4>Choose your player</h4>
                    </Col>
                    <Col xs="12" md="4" className="d-flex justify-content-center align-items-center">
                        <img max width="100%" height="250" src="https://www.girlrevgaming.com/wp-content/uploads/2020/07/GIRLGAMER.jpg" alt="Gamer img" />
                    </Col> 
                </Row>
                <GamersCardAllPlayers></GamersCardAllPlayers>
            </Container>
        )
    }
}

export default AllPlayers