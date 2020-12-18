import React from 'react';
import { Card,  CardImg, CardGroup } from 'reactstrap';

// CSS //
import './CategoryCardGroup.css'

const CategoryCardGroup = (props) => {
  return (
    <CardGroup className="homeCategories">
      <Card className="categoriesCard border-0">
        <a href="/Videogames">
          <CardImg className="border-0" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-juegos.png?raw=true" alt="Card image juegos" />
        </a>
      </Card>
      <Card className="categoriesCard border-0">
        <a href="/Teams">
          <CardImg className="border-0" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-equipos.png?raw=true" alt="Card image equipos" />
        </a>
      </Card>
      <Card className="categoriesCard border-0">
        <a href="/AllPlayers">
          <CardImg className="border-0" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-gamers.png?raw=true" alt="Card image gamers" />
        </a>
      </Card>
      <Card className="categoriesCard border-0">
        <CardImg className="border-0" top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-extras.png?raw=true" alt="Card image extras" />
      </Card>
    </CardGroup>
  );
};

export default CategoryCardGroup;