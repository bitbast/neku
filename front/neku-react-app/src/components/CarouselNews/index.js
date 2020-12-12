import React, { useState, useEffect } from 'react';

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
    picture: 'https://gamespot1.cbsistatic.com/uploads/screen_kubrick/123/1239113/3320903-thumb.jpg',
    title: 'Título 1',
    caption: 'Subtítulo 1',
    source: 'https://www.gameinformer.com/'
  },
  {
    picture: 'https://wearesocial-net.s3.amazonaws.com/wp-content/uploads/2020/11/gamer_room.jpg',
    title: 'Título 2',
    caption: 'Subtitle 2',
    source: 'https://www.levelup.com/noticias'
  },
  {
    picture: 'https://assets.geekinsider.com/2020/06/image1-4.jpeg',
    title: 'Título 3',
    caption: 'Subtitle 2',
    source: 'https://computerhoy.com/noticias/gaming'
  }
];

const CarouselNews = (props) => {

  const [news, setNews] = useState([]);

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

  // let slides = []

  useEffect(() => {
    // console.log('mountComponent')
    obtainData()

    // console.log(news)
  },[])

  const obtainData = async () => {
      const data = await fetch("https://nekuapi-sleepy-kudu-wm.mybluemix.net/news")
      const newsCollection = await data.json()
      console.log(newsCollection)
      setNews(newsCollection.data.articles) // de este key es de donde estoy jalando la info del json
      console.log(news)
  }

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
      className="carouselNewsCard"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      { 
        news.map((item) => {          
          return (
              <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item._id}
              >
                <a href={item.source}>
                <img src={item.picture} alt={item.title} />
                </a>
                <CarouselCaption captionText={item.caption} captionHeader={item.title} />
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