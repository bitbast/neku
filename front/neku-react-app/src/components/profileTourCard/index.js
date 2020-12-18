import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Row, Col, Card, CardImg, CardBody } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './profileTourCard.css'

const ProfileTourCard = () => {

    const {playerId} = useParams()
    console.log(playerId)
    
    const [tours, setTours] = useState([])

    useEffect(() => {
        obtainData()
    }, [])

    const obtainData = async () => {
        const data = await fetch(`https://nekuapi-sleepy-kudu-wm.mybluemix.net/players/id/${playerId}`)
        const tourData = await data.json()
        console.log(tourData)
        setTours(tourData.data.team.tournamentsPlayed)
    }

    return(
        
        <Row>
            {
                tours.map(item => (
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" >
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src={item.tournamentPicture} alt="Tournament" className="TournametImg" />
                            <CardBody className="d-flex justify-content-center align-items center p-2 ">
                                <p className="TournamentTitle mr-2">Juego:</p>
                                <p className="TournamentData ml-2">{item.tournamentName}</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Rank:</p>
                                <p className="TournamentData ml-2">{item.ranking}</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Fecha:</p>
                                <p className="TournamentData ml-2">{item.tournamentDate}</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Tiempo:</p>
                                <p className="TournamentData ml-2">{item.tournamentTotalTime}hrs</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">KD:</p>
                                <p className="TournamentData ml-2">{item.tournamentKD}%</p>
                            </CardBody>
                        </Card>
                    </Col>
                ))
            }
        </Row>  
    )
}

export default ProfileTourCard