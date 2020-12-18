import React, {useState, useEffect} from "react"
import {Col, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom"
import "./VideogamesCard.css"

const VideogamesCard = () => {

    const [videogames, setVideogames] = useState([])

    useEffect(() => {
        obtainData()
    }, [])

    const obtainData = async () => {
        const data = await fetch("https://nekuapi-sleepy-kudu-wm.mybluemix.net/games/")
        const gamesCollection = await data.json()
        console.log(gamesCollection)
        setVideogames(gamesCollection.data.game)
    }

    return(
        <Row>
            {
                videogames.map( item => (
                    <Col key={item.id} xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="3" className=" mb-3 mt-3 colTeam p-2" >
                        <Link to={`/Gamers/${item.gameName}`}>
                            <div className="p-2 TournamentCard">
                                <img width="100%" height="300" src={item.gameLogo} alt="Tournament" className="teamImage" />
                                <div className="d-flex justify-content-around align-items-center m-2">
                                    <p className=" gamerName text-center text-white m-0">{item.gameName}</p>
                                </div>
                            </div>
                        </Link>
                    </Col>

                ))
            }
        </Row>
    )
}

export default VideogamesCard