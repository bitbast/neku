import React, {Component} from "react"
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Profile.css"


class Profile extends Component {
    render () {
        return (
            <Container fluid className="p-0">
                <Row>
                    <Col md="6" className=" playerNameBox d-flex justify-content-center align-items-center">
                        <p className= "playerName p-5">Nombre del jugador</p>
                    </Col>
                    <Col md="6" className="p-0">
                            <img width="100%" height="500" src="https://picsum.photos/200" alt="Card image cap" />
                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default Profile;