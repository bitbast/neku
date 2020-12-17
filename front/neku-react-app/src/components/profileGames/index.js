import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './profileGames.css'

const ProfileGames = () => {
    const {playerId} = useParams()
    console.log(playerId)
    
    const [games, setGames] = useState([])

    useEffect(() => {
        obtainData()
    }, [])

    const obtainData = async () => {
        const data = await fetch(`https://nekuapi-sleepy-kudu-wm.mybluemix.net/players/id/${playerId}`)
        const gamesData = await data.json()
        console.log(gamesData)
        setGames(gamesData.data.team.gamesPlayed)
    }

    
    return(

        <Row className="justify-content-md-center">
            {
                games.map(item => (
                    
                        <Col xs="6" md="6" lg="3" className="p-2">
                        <img width="150" height="150" src={item.gameLogo} alt="Equipo logo" className="rounded-circle mx-auto d-block" /> 
                        <p className="profileStatsTitle text-center mb-2">{item.gameName}</p>
                        </Col>
                    
                ))
            }
        </Row>

    )
    
} 

export default ProfileGames