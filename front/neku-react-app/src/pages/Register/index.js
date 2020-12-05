import React from 'react';

import Signup from '../../components/Signup'

import './Register.css'

class Form extends Component {
  render () {
      return (
          <Container fluid className="profileContainer">
              <Row className="d-flex justify-content-center align-items-center playerNameBox">
                  <Col xs="12" md="6" className= "d-flex justify-content-center align-items-center">
                      <p className= "playerName">Luis Bastida</p>
                  </Col>
                  <Col xs="12" md="4" className="d-flex justify-content-center align-items-center">
                          <img max width="100%" height="250" src="https://i.ytimg.com/vi/qMIWHHdp-VE/maxresdefault.jpg" alt="Gamer img" />
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

export default Form;