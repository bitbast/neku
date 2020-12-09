import React, { useState, useEffect } from "react";


// Components
import Header from '../../components/Header'
import News from '../../components/News'
import Tournaments from '../../components/Tournaments'
import RankDeck from '../../components/RankDeck'

function Home(props) {
  
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
