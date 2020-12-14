import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Row, Col, Card, CardImg, CardBody } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './profileTourCard.css'

const ProfileTourCard = () => {

    const {playerId} = useParams()
    console.log(playerId)
    
    const [tours, setTours] = useState({})

    useEffect(() => {
        obtainData()
    }, [])

    const obtainData = async () => {
        const data = await fetch(`https://nekuapi-sleepy-kudu-wm.mybluemix.net/players/id/${playerId}`)
        const playerData = await data.json()
        console.log(playerData)
        setTours(playerData.data.team.tournamentsPlayed.data)
    }

    return(
        <Row>
        <Col xs="12" className="sectionTitle">Torneos</Col>
                <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" >
                    <Card className="TournamentCard m-3">
                        <CardImg top width="100%" height="150" src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonBallFighterZ.jpg" alt="Tournament" className="TournametImg" />
                        <CardBody className="d-flex justify-content-center align-items center p-2 ">
                            <p className="TournamentTitle mr-2">Juego:</p>
                            <p className="TournamentData ml-2">DBZ</p>
                        </CardBody>
                        <CardBody className="d-flex justify-content-center align-items center p-2">
                        <p className="TournamentTitle mr-2">Rank:</p>
                            <p className="TournamentData ml-2">15</p>
                        </CardBody>
                        <CardBody className="d-flex justify-content-center align-items center p-2">
                        <p className="TournamentTitle mr-2">Fecha:</p>
                            <p className="TournamentData ml-2">Abril 2020</p>
                        </CardBody>
                        <CardBody className="d-flex justify-content-center align-items center p-2">
                        <p className="TournamentTitle mr-2">Tiempo:</p>
                            <p className="TournamentData ml-2">4 hrs</p>
                        </CardBody>
                        <CardBody className="d-flex justify-content-center align-items center p-2">
                        <p className="TournamentTitle mr-2">KD:</p>
                            <p className="TournamentData ml-2">50%</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )

    


            

}

export default ProfileTourCard