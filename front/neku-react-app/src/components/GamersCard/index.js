import React, { useState, useEffect } from "react"
import { Col, Row } from "reactstrap";
import { useParams , Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import "./GamersCard.css"


const GamersCard = () => {

    const {teamId} = useParams()
    console.log(teamId)

    const [gamers, setGamers] = useState([])
    
    useEffect(() => {
        obtainData()
    },[])

    const obtainData = async () => {
        const data = await fetch(`http://localhost:8080/players/${teamId}`)
        const gamersCollection = await data.json()
        console.log(gamersCollection)
        setGamers(gamersCollection.data.team)
    }

    return(
        <Row>
            {
                gamers.map( item => (
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="3" className=" mb-3 mt-3 colTeam p-2" >
                        <Link to={`/Profile/${item._id}`}>
                            <div className="p-2 TournamentCard">
                                <img width="100%" height="300" src={item.gamerPicture} alt="Tournament" className="teamImage" />
                                <div className="d-flex justify-content-around align-items-center m-2">
                                    <p className=" gamerName text-center text-white m-0">{item.name} {item.fatherLastname} </p>
                                    <p className="gamerRanking text-center m-0">#1</p>
                                    <img width="30" height="30" src="https://picsum.photos/200" alt="pais flag" className="rounded-circle"/>
                                </div>
                            </div>
                        </Link>
                    </Col>
                ))
            }
        </Row>
    )
}

export default GamersCard