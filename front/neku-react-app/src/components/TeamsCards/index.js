import React, {useState, useEffect} from "react"
import {Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./TeamsCards.css"

const TeamsCard = () => {

    const [teams, setTeams] = useState([])
    
    useEffect(() => {
        obtainData()
    },[])

    const obtainData = async () => {
        const data = await fetch("http://localhost:8080/teams/")
        const teamsCollection = await data.json()
        console.log(teamsCollection)
        setTeams(teamsCollection.data.team)
    }

    
    return(
        <div>
            { 
                teams.map( item => (
                    <Col key={item.id} xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" className=" mb-3 mt-3 colTeam" >
                        <a href="/TeamPlayers">
                            <div className="p-2 TournamentCard">
                                <img width="100%" height="200" src={item.teamLogo} alt="Tournament" className="teamImage" />
                                <p className=" teamName text-center text-white"> {item.name} </p>
                                <img width="50" height="50" src={item.teamCountry} alt="pais flag" className="rounded-circle mx-auto d-block"/>
                            </div>
                        </a>
                    </Col>
                ))
            }
        </div>
    )
}

export default TeamsCard