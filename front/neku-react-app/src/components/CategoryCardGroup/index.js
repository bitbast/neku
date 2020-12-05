import React from 'react';
import {
  Card,  CardImg, CardGroup,
} from 'reactstrap';

// CSS //
import './CategoryCardGroup.css'

const CategoryCardGroup = (props) => {
  return (
    <CardGroup>
      <Card>
        <a href="/Videogames">
        <CardImg top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-juegos.png?raw=true" alt="Card image juegos" />
        </a>
      </Card>
      <Card>
        <a href="/Teams">
        <CardImg top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-equipos.png?raw=true" alt="Card image equipos" />
        </a>
      </Card>
      <Card>
        <a href="/Gamers">
        <CardImg top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-gamers.png?raw=true" alt="Card image gamers" />
        </a>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-extras.png?raw=true" alt="Card image extras" />
      </Card>
    </CardGroup>
  );
};

export default CategoryCardGroup;