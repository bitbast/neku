import React, { useState, useEffect } from "react";


// Components
import Header from '../../components/Header'
import News from '../../components/News'
import Tournaments from '../../components/Tournaments'
import RankDeck from '../../components/RankDeck'

function Home(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://nekuapi-sleepy-kudu-wm.mybluemix.net/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      });
  }, []);

  // const middlePosts = posts.slice(0, 4);
  console.log(props);
  return (
    <div>
      <Header />
      <News />
      <Tournaments />
      <RankDeck />
    </div>
  );
}

export default Home;
