import React, {Component} from "react"
import { Container, Row, Col} from "reactstrap";
import TeamsCard from "../../components/TeamsCards"
import 'bootstrap/dist/css/bootstrap.css';
import "./Teams.css"

class Teams extends Component {
    render() {
        return(
            <Container fluid className="teamsContainer">
                <Row className="d-flex justify-content-center align-items-center sectionNameBox">
                    <Col xs="12" md="6" className= "d-flex justify-content-center align-items-center">
                        <p className= "playerName">Equipos!</p>
                    </Col>
                    <Col xs="12" md="4" className="d-flex justify-content-center align-items-center">
                            <img max width="100%" height="250" src="https://www.techgames.com.mx/wp-content/uploads/2019/08/Telcel-LVP-Mexico-equipos.jpg" alt="Gamer img" />
                    </Col> 
                </Row>
                <Row >
                    <TeamsCard></TeamsCard>
                    <TeamsCard></TeamsCard>
                    <TeamsCard></TeamsCard>
                    <TeamsCard></TeamsCard>
                    <TeamsCard></TeamsCard>
                    <TeamsCard></TeamsCard>
                </Row>
            </Container>
        )
    }
}

export default Teams