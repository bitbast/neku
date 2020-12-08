import React, {Component} from "react"
import { Container, Row, Col} from "reactstrap";
import GamersCard from "../../components/GamersCard";
import TeamPlayersHeader from "../../components/TeamPlayersHeader"
import 'bootstrap/dist/css/bootstrap.css';
import "./TeamPlayers.css"

class TeamPlayers extends Component {

    

    render() {
        return(
            <Container fluid className="teamsContainer">
                <TeamPlayersHeader></TeamPlayersHeader>
                <GamersCard></GamersCard>
            </Container>
        )
    }
}

export default TeamPlayers