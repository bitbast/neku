import React, {Component} from "react";

import {Container, Row, Col} from 'reactstrap';

import SignupTeam from '../../components/SignupTeam'

import "./FormTeam.css";

class FormTeam extends Component {
    render () {
        return (
            <Container fluid className="signTeam">
                <Row>
                    <Col>
                        <SignupTeam />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FormTeam;