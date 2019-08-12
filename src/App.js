import React from 'react';

function Beers({ name, image }) {
  return (
    <div>
      <h2>I Like { name }</h2>
      <img width="300px" src={ image } />
    </div>
  );
}

const BeerBox = [
  {
    name: 'Terra',
    image: 'http://cfile237.uf.daum.net/image/993E64455CB147191814FE'
  },
  {
    name: 'Cass',
    image: 'https://www.ob.co.kr/assets/images/mobile/m_main_visu_01_v2.jpg'
  },
  {
    name: 'Hite',
    image: 'http://file.hitejinro.com/hitejinro2016/upFiles/brand/KR/category/20190711_35396967.jpg'
  },
  {
    name: 'Fitz',
    image: 'http://img.koreatimes.co.kr/upload/newsV2/images/201802/2a850302f1fb44d2a27f8a82d4c71e08.jpg/dims/resize/740/optimize'
  }
];

function renderBeer(beer) {
  return <Beers name={beer.name} image={beer.image} />
}

function App() {
  return (
    <div>
      {BeerBox.map(renderBeer)}
      {console.log(BeerBox.map(renderBeer))}
    </div>
  );
}

export default App;