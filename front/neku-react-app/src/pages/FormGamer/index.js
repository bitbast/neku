import React, {Component} from "react";

import {Container, Row, Col} from 'reactstrap';

import SignupGamer from '../../components/SignupGamer'

import "./FormGamer.css";

class FormGamer extends Component {
    render () {
        return (
            <Container fluid className="signGamer">
                <Row>
                    <Col>
                        <SignupGamer />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FormGamer;