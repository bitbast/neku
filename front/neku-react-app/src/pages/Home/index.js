import React, { useState, useEffect } from "react";

// Reactstrap
import { Container, Row, Col } from "reactstrap";

// Components


function Home(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data.entries);
      });
  }, []);

  const middlePosts = posts.slice(0, 4);
  console.log(props);
  return (
    <div>
      
    </div>
  );
}

export default Home;
