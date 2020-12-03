import React, {Component} from "react"
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './profileGames.css'

class ProfileGames extends Component {
    render() {
        return(
            <Row className="justify-content-md-center">
                    <Col md="12" className="sectionTitle">Juegos</Col>
                    <Col xs="6" md="6" lg="3" className="p-2">
                    <img width="150" height="150" src="https://picsum.photos/200" alt="Equipo logo" className="rounded-circle mx-auto d-block" /> 
                    </Col>
                    <Col xs="6" md="6" lg="3" className="p-2">
                    <img width="150" height="150" src="https://picsum.photos/200" alt="Equipo logo" className="rounded-circle mx-auto d-block" /> 
                    </Col>
                    <Col xs="6" md="6" lg="3" className="p-2">
                    <img width="150" height="150" src="https://picsum.photos/200" alt="Equipo logo" className="rounded-circle mx-auto d-block" /> 
                    </Col>
                    <Col xs="6" md="6" lg="3" className="p-2">
                    <img width="150" height="150" src="https://picsum.photos/200" alt="Equipo logo" className="rounded-circle mx-auto d-block" /> 
                    </Col>
                   
                </Row>
        )
    }
} 

export default ProfileGames