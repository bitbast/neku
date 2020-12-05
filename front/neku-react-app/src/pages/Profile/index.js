import React, {Component} from "react"
import ProfileStats from "../../components/profileStats/index"
import ProfileTourCard from "../../components/profileTourCard/index"
import ProfileGames from "../../components/profileGames/index"
import ProfileSocialMedia from "../../components/profileSocialMedia/index"
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Profile.css";


class Profile extends Component {
    render () {
        return (
            <Container fluid className="profileContainer">
                <Row className="d-flex justify-content-center align-items-center playerNameBox">
                    <Col xs="12" md="6" className= "d-flex justify-content-center align-items-center">
                        <p className= "playerName">Luis Bastida</p>
                    </Col>
                    <Col xs="12" md="4" className="d-flex justify-content-center align-items-center">
                            <img max width="100%" src="https://i.ytimg.com/vi/qMIWHHdp-VE/maxresdefault.jpg" alt="Gamer img" />
                    </Col> 
                </Row>
                <ProfileStats/>
                <ProfileTourCard/>
                <ProfileGames/>
                <ProfileSocialMedia/>
            </Container>
        )
    }
}

export default Profile;