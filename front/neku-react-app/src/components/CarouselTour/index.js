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
    src: 'https://cdn2.unrealengine.com/11br-competitive-evergreen-blue-newsheader-1920x1080-957497914.jpg',
    altText: 'FORTNITE',
  },
  {
    src: 'https://cdn.game.tv/game-tv-content/images_3/e412a7c3eb24413110362fd06686cc92/Banners.jpg',
    altText: 'AMONG US',
  },
  {
    src: 'https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2019/09/10/smash-ultimate-european-circuit-times-tournaments-details-header_feature.jpg',
    altText: 'SMASH BROS ULTIMATE',
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
          <CardTitle tag="h5">League Of Legends</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Ubicación: </CardSubtitle>
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