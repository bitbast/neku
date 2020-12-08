import React, { useState } from 'react';

// ------------- REACTSTRAP ------------- //
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

// ------------- CSS ------------- //
import './CarouselNews.css'

const items = [
  {
    src: 'https://gamespot1.cbsistatic.com/uploads/screen_kubrick/123/1239113/3320903-thumb.jpg',
    altText: 'Título Novedades',
    caption: 'Gaming News',
    sub: 'subtitle 1'
  },
  {
    src: 'https://wearesocial-net.s3.amazonaws.com/wp-content/uploads/2020/11/gamer_room.jpg',
    altText: 'Título Univ',
    caption: 'Universal',
    sub: 'subtitle 2'
  },
  {
    src: 'https://assets.geekinsider.com/2020/06/image1-4.jpeg',
    altText: 'Título',
    caption: 'Reforma.com',
    sub: 'subtitle 3'
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
          <CarouselCaption captionText={item.sub} captionHeader={item.caption} />
        </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={100000}
      className="carouselNewsCard"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselNews;