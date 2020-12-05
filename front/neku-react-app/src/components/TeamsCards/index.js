import React, {Component} from "react"
import { Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./TeamsCards.css"

class TeamsCard extends Component {
    render() {
        return(
            <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" className=" mb-3 mt-3 colTeam" >
                <a href="/TeamPlayers">
                    <div className="p-2 TournamentCard">
                        <img width="100%" height="200" src="https://a.espncdn.com/photo/2020/0115/r652568_888x500_16-9.png" alt="Tournament" className="teamImage" />
                        <p className=" teamName text-center text-white">Equipo: Anahuac</p>
                        <img width="50" height="50" src="https://picsum.photos/200" alt="pais flag" className="rounded-circle mx-auto d-block"/>
                    </div>
                </a>
            </Col>
        )
    }
}

export default TeamsCard