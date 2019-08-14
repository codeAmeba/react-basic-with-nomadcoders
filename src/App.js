import React from 'react';
import PropTypes from 'prop-types';

const BeerBox = [
  {
    id: 1,
    name: 'Terra',
    image: 'http://cfile237.uf.daum.net/image/993E64455CB147191814FE',
    rating: 4.6
  },
  {
    id: 2,
    name: 'Cass',
    image: 'https://www.ob.co.kr/assets/images/mobile/m_main_visu_01_v2.jpg',
    rating: 3.9
  },
  {
    id: 3,
    name: 'Hite',
    image: 'http://file.hitejinro.com/hitejinro2016/upFiles/brand/KR/category/20190711_35396967.jpg',
    rating: 4.1
  },
  {
    id: 4,
    name: 'Fitz',
    image: 'http://img.koreatimes.co.kr/upload/newsV2/images/201802/2a850302f1fb44d2a27f8a82d4c71e08.jpg/dims/resize/740/optimize',
    rating: 3.5
  }
];

function Beers({name, picture, rating}) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5</h4>
      <img width="300px" src={picture} alt={name} />
    </div>
  );
}

Beers.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {BeerBox.map(beer => (
        <Beers 
          key={beer.id} 
          name={beer.name} 
          picture={beer.image} 
          rating={beer.rating}
        />
      ))}
    </div>
  );
}

export default App;