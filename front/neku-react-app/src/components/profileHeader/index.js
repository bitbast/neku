import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './profileHeader.css'

const ProfileHeader = () => {

    
    const {playerId} = useParams()
    console.log(playerId)
    
    const [player, setPlayer] = useState({})


    useEffect(() => {
        obtainData()
    }, [])

    const obtainData = async () => {
        const data = await fetch(`https://nekuapi-sleepy-kudu-wm.mybluemix.net/players/id/${playerId}`)
        const playerData = await data.json()
        console.log(playerData)
        setPlayer(playerData.data.team)
    }

    return (
        <Row className="d-flex justify-content-center align-items-center playerNameBox">
                <Col xs="12" md="6" className= "heading">
                    <h1> {player.name} {player.fatherLastname} </h1>
                    <h4>{player.email}</h4>
                </Col>
                <Col xs="12" md="4" className="d-flex justify-content-center align-items-center">
                    <img max width="100%" height="250" src={player.gamerPicture} alt="Gamer img" />
                </Col>
            </Row>
    )
}

export default ProfileHeader