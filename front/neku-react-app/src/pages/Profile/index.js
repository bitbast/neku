import React, {Component} from "react"
import ProfileStats from "../../components/profileStats/index"
import ProfileTourCard from "../../components/profileTourCard/index"
import ProfileGames from "../../components/profileGames/index"
import ProfileSocialMedia from "../../components/profileSocialMedia/index"
import { Container, Row, Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Profile.css";
import data from "@iconify/icons-mdi/facebook"



class Profile extends Component {

    constructor (props) {
        super(props)
        this.state = {
            players: {},
            isFetch: true
        }
    }   

    async componentDidMount () {
        console.log(this.props)
        await fetch("http://localhost:8080/teams/")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            players: data.data.team[0].members[0].Gamer,
            isFetch: false
          });   
        });
    }

    render () {
        console.log(this.state.players)
        if (this.state.isFetch) {
            return 'Loading ...'

        }
       return (
            <Container fluid className="profileContainer">
                <Row className="d-flex justify-content-center align-items-center playerNameBox">
                    <Col xs="12" md="6" className= "heading">
                        <h1> {this.state.players.name} </h1>
                        <h4>@bitbast</h4>
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

export default Profile;