import React, { useState, useEffect } from "react";


// Components
import Header from '../../components/Header'
import News from '../../components/News'
import Tournaments from '../../components/Tournaments'
import RankDeck from '../../components/RankDeck'

function Home(props) {
<<<<<<< HEAD
  
=======
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      });
  }, []);

  // const middlePosts = posts.slice(0, 4);
>>>>>>> c81655ae11b2e7a98eeb102e1019ee5e66de4e71
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
