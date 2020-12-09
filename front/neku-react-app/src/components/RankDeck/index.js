import React from 'react';

// ------------- REACTSTRAP ------------- //
import {
  Container, Row, Col, Card, Button, CardImg, CardTitle, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

// ------------- CSS ------------- //
import './RankDeck.css'

// ------------- SMALLER COMPONENTS ------------- //
import TableInfo from '../TableInfo'


const RankDeck = (props) => {

  const [gamer, setGamer] = useState({});

  useEffect(() => {
    // console.log('mountComponent')
    obtainData()

    // console.log(news)
  },[])

  const obtainData = async () => {
      const data = await fetch("http://localhost:8080/players")
      const gamersCollection = await data.json()
      console.log(gamersCollection)
      setGamer(gamersCollection.data.team) // de este key es de donde estoy jalando la info del json
      console.log(gamer)
  }

  return (
  <Container fluid id="rankersSection">
    <Row>
      <Col className="heading">
        <h1>RANKERS</h1>
        <h4>El TOP de la comunidad</h4>
      </Col>
    </Row>
    <Row>
      <CardDeck>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="rankerCards m-2"  xs={12} sm={6} md={6} lg={3}>
            <CardImg top src="https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2976853.png" alt="Card image cap" />
            <CardBody>
                  {
                    gamer.map((item) => {          
                      return (
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <CardTitle tag="h5" key={item._id}>Ranker: {{item.name}+{item.fatherLastName}}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{item.nickname}</CardSubtitle>
                          </div>
                          <p className="countryFlag">{item.country}</p>
                        </div>
                      )
                    })
                  }
              <TableInfo />
              <div className="d-flex justify-content-center align-items-center pb-3">
                <Button id="moreInfoBtn">DESCUBRE MÁS INFORMACIÓN</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </CardDeck>
    </Row>
  </Container>
  );
};

export default RankDeck;