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
    src: 'https://fortnitebr.news/wp-content/uploads/2020/12/Fortnite-Mando-1000x600-364x205.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://s.yimg.com/ny/api/res/1.2/BLrNn0JfDybDKB.YzCIotA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/cosmopolitan_438/c2f19de4a5740bf2988b43a6858b4742',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://cdn1.dotesports.com/wp-content/uploads/2020/03/31162532/EUdqZwpXQAEmVop.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
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
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
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