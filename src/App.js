import React from 'react';

const BeerBox = [
  {
    id: 1,
    name: 'Terra',
    image: 'http://cfile237.uf.daum.net/image/993E64455CB147191814FE'
  },
  {
    id: 2,
    name: 'Cass',
    image: 'https://www.ob.co.kr/assets/images/mobile/m_main_visu_01_v2.jpg'
  },
  {
    id: 3,
    name: 'Hite',
    image: 'http://file.hitejinro.com/hitejinro2016/upFiles/brand/KR/category/20190711_35396967.jpg'
  },
  {
    id: 4,
    name: 'Fitz',
    image: 'http://img.koreatimes.co.kr/upload/newsV2/images/201802/2a850302f1fb44d2a27f8a82d4c71e08.jpg/dims/resize/740/optimize'
  }
];

function Beers({name, picture}) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <img width="300px" src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {BeerBox.map(beer => (
        <Beers key={beer.id} name={beer.name} picture={beer.image} />
      ))}
    </div>
  );
}

export default App;