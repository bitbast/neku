import React, {Component} from "react"
import {Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./VideogamesCard.css"

class VideogamesCard extends Component {
    render() {
        return(
            <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="3" className=" mb-3 mt-3 colTeam p-2" >
                <a href="/Gamers">
                    <div className="p-2 TournamentCard">
                        <img width="100%" height="300" src="https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x-800x450.jpg" alt="Tournament" className="teamImage" />
                        <div className="d-flex justify-content-around align-items-center m-2">
                            <p className=" gamerName text-center text-white m-0">League of Legends</p>
                        </div>
                    </div>
                </a>
            </Col>
        )
    }
}

export default VideogamesCard