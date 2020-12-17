import React, { useState, useEffect, Fragment } from 'react';

// ------------- REACTSTRAP ------------- //
import {
  Card, Button, CardImg, CardTitle, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

// ------------- CSS ------------- //
import './RankCard.css'

// ------------- SMALLER COMPONENTS ------------- //
import TableInfo from '../TableInfo'


const RankDeck = (props) => {

  const [gamerCard, setGamerCard] = useState([]);

  useEffect(() => {
    obtainData()
  },[])

  const obtainData = async () => {
      const data = await fetch("https://nekuapi-sleepy-kudu-wm.mybluemix.net/players")
      const gamerCardCollection = await data.json()
      // console.log(gamerCardCollection)
      setGamerCard(gamerCardCollection.data.team) // de este key es de donde estoy jalando la info del json
      // console.log(gamer)
  }

  return (
  <Fragment>
    <CardDeck>
      {
        gamerCard.map((item) => {  
          return (
                  <Card className="rankerCards">
                    <CardImg key={item._id} top src={item.gamerPicture} className="rankerCardImg" alt="Card image cap" />
                    <CardBody>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <CardTitle tag="h5" >Ranker: {item.name} {item.fatherLastName}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">{item.nickname}</CardSubtitle>
                        </div>
                        <p className="countryFlag">{item.country}</p>
                      </div>
                      <TableInfo />
                      <div className="d-flex justify-content-center align-items-center pb-3">
                          <Button id="moreInfoBtn">DESCUBRE MÁS INFORMACIÓN</Button>
                      </div>
                    </CardBody>
                  </Card>
          )
        })
      }
    </CardDeck>
  </Fragment>
  );
};

export default RankDeck;