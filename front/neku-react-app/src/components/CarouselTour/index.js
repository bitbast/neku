import React, { useState } from 'react';

// ------------- REACTSTRAP ------------- //
import {
  CardBody,
  CardTitle,
  CardSubtitle,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

// ------------- CSS ------------- //
import './CarouselTour.css'

import TableResults from '../TableResults'

const items = [
  {
    src: 'https://i.pcmag.com/imagery/lineups/06dxdkd5h3MmSKAaMczRpbQ-1..1569492889.jpg',
    altText: 'Torneo 1'
  },
  {
    src: 'https://mk0logisticsoftiiud5.kinstacdn.com/wp-content/uploads/2019/07/Article-Key-Image-01989-800x420.jpg',
    altText: 'Torneo 2'
  },
  {
    src: 'https://cdn1.dotesports.com/wp-content/uploads/2020/08/18201155/EftgMHEXgAEYnua.jpg',
    altText: 'Torneo 3'
  }
];

const CarouselNews = (props) => {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CardBody>
          <CardTitle tag="h4"></CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">Juego: </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">País: </CardSubtitle>
        </CardBody>
        <TableResults />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel className="carouselTour"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselNews;