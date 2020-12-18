import React, { useState, useEffect } from 'react';

// ------------- REACTSTRAP ------------- //
import {
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

// ------------- CSS ------------- //
import './CarouselTour.css'

// import TableResults from '../TableResults'

const items = [];

const CarouselNews = (props) => {

  const [tournaments, setTournament] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  useEffect(() => {
    // console.log('mountComponent')
    obtainData()

    // console.log(news)
  },[])

  const obtainData = async () => {
      const data = await fetch("https://nekuapi-sleepy-kudu-wm.mybluemix.net/tournaments")
      const tournamentsCollection = await data.json()
      console.log(tournamentsCollection)
      setTournament(tournamentsCollection.data.tournament) // de este key es de donde estoy jalando la info del json
      console.log(tournaments)
  }

  return (
    <Carousel className="carouselTour"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      { 
        tournaments.map((item) => {          
          return (
              <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item._id}
              >
                <a href={item.source}>
                  <img src={item.picture} alt={item.tournamentName} />
                </a>
                <CardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <CardTitle>
                      <h5>{item.tournamentName}</h5>
                    </CardTitle>
                    <p id="tourCountryFlag">{item.countryFlag}</p>
                  </div>
                  <div>
                    <CardSubtitle id="tourCountry" className="mb-2 text-muted">
                      <h6>{item.country}</h6>
                    </CardSubtitle>
                    <h6 className="mb-2 text-muted">{item.date}</h6>
                  </div>
                </CardBody>
              </CarouselItem>
          )
        })
      }
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselNews;