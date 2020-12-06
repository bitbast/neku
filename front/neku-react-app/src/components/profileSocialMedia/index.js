import React, {Component} from "react"
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Icon} from "@iconify/react";
import facebookIcon from "@iconify/icons-mdi/facebook";
import youtubeIcon from '@iconify/icons-mdi/youtube';
import twitchIcon from '@iconify/icons-mdi/twitch';
import twitterIcon from '@iconify/icons-mdi/twitter';
import './profileSocialMedia.css'

class ProfileSocialMedia extends Component {
    render() {
        return(
           <Row className="justify-content-md-center">
                <Col xs="12" className="sectionTitle">Redes Sociales</Col>
                <Col xs="6" md="2" className="d-flex justify-content-center align-items center mb-5">
                    <Icon icon={facebookIcon} color="#F2AE2E" width="100" height="100" />
                </Col>
                <Col xs="6" md="2" className="d-flex justify-content-center align-items center mb-5">
                    <Icon icon={youtubeIcon} color="#F2AE2E" width="100" height="100" />
                </Col>
                <Col xs="6" md="2" className="d-flex justify-content-center align-items center mb-5">
                    <Icon icon={twitchIcon} color="#F2AE2E" width="100" height="100" />
                </Col>
                <Col xs="6" md="2" className="d-flex justify-content-center align-items center mb-5">
                    <Icon icon={twitterIcon} color="#F2AE2E" width="100" height="100" />
                </Col>   
            </Row>
        )
    }
}

export default ProfileSocialMedia