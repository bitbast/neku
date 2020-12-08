import React, { Component } from "react"
import { Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./GamersCard.css"

class GamersCard extends Component {
    render() {
        return(
            <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="3" className=" mb-3 mt-3 colTeam p-2" >
                <a href="/Profile">
                    <div className="p-2 TournamentCard">
                        <img width="100%" height="300" src="https://img.redbull.com/images/c_fill,g_auto,w_1500,h_1000/q_auto,f_auto/redbullcom/2019/07/01/b17a95c7-9b60-4420-9a70-bc2ffed5eb6a/6-gamer-girls-india" alt="Tournament" className="teamImage" />
                        <div className="d-flex justify-content-around align-items-center m-2">
                            <p className=" gamerName text-center text-white m-0">Jugadora</p>
                            <p className="gamerRanking text-center m-0">#1</p>
                            <img width="30" height="30" src="https://picsum.photos/200" alt="pais flag" className="rounded-circle"/>
                        </div>
                    </div>
                </a>
            </Col>
        )
    }
}

export default GamersCard