import React from 'react';
import {
  Card,  CardImg, CardGroup,
} from 'reactstrap';

// CSS //
import './CategoryCardGroup.css'

const CategoryCardGroup = (props) => {
  return (
    <CardGroup id="homeCategories">
      <Card className="categoriesCard">
        <a href="/Videogames">
          <CardImg top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-juegos.png?raw=true" alt="Card image juegos" />
        </a>
      </Card>
      <Card className="categoriesCard">
        <a href="/Teams">
          <CardImg top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-equipos.png?raw=true" alt="Card image equipos" />
        </a>
      </Card>
      <Card className="categoriesCard">
        <a href="/Gamers">
          <CardImg top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-gamers.png?raw=true" alt="Card image gamers" />
        </a>
      </Card>
      <Card className="categoriesCard">
        <CardImg top width="100%" src="https://github.com/bitbast/neku/blob/lucho/front/neku-react-app/src/images/neku-category-cards-extras.png?raw=true" alt="Card image extras" />
      </Card>
    </CardGroup>
  );
};

export default CategoryCardGroup;