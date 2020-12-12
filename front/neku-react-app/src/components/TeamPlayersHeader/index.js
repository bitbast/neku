import React, { useState, useEffect } from "react"
import { Col, Row } from "reactstrap";
import { useParams , Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import "./TeamPlayersHeader.css"


const TeamPlayersHeader = () => {

    const {teamId} = useParams()
    console.log(teamId)

    const [gamers, setGamers] = useState([])
    
    useEffect(() => {
        obtainData()
    },[])

    const obtainData = async () => {
        const data = await fetch(`https://nekuapi-sleepy-kudu-wm.mybluemix.net/teams/${teamId}`)
        const gamersCollection = await data.json()
        console.log(gamersCollection)
        setGamers(gamersCollection.data.team)
    }

    return(
        <div>
            {
                gamers.map( item => (
                    <Row className="d-flex justify-content-center align-items-center sectionNameBox">
                        <Col xs="12" md="6" className= "d-flex justify-content-center align-items-center">
                            <p className= "playerName"> {item.teamName} </p>
                        </Col>
                        <Col xs="12" md="4" className="d-flex justify-content-center align-items-center">
                            <img max width="100%" height="250" src={item.teamLogo} alt="Gamer img" />
                        </Col> 
                    </Row>
                ))
            }
       </div>
    )
}

export default TeamPlayersHeader