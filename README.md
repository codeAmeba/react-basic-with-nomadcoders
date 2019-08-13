# Movie App 2019 - React JS Practice
***

# TIL(190812) - React 01
***
- 리액트는 Virtual DOM
	- [번역 리액트에 대해서 그 누구도 제대로 설명하기 어려운 것  – 왜 Virtual DOM 인가? | VELOPERT.LOG](https://velopert.com/3236)
- JSX라는 리액트만의 문법이 존재함.
	- JS와 HTML이 섞인 듯한 느낌
	- 두 단어 이상의 결합은 모두 카멜케이스(ex: className, backgroundColor)
- 한 파일에 여러 컴포넌트가 들어올 수도 있음.
```javascript
function Potato() {
  return <h3>I love potato</h3>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato />
    </div>
  );
}
```
- props(추가 공부 필요)
- 자바스크립트의 문법을 대부분 그대로 쓸 수 있음
```javascript
import React from 'react';

function Beer({ name }) {
  return <h1>I love { name }</h1>
}

const BeerBox = [
  {
    name: 'Terra'
  },
  {
    name: 'Cass'
  },
  {
    name: 'Hite'
  },
  {
    name: 'Fitz'
  }
]

function App() {
  return (
    <div>
      {BeerBox.map(item => (
        <Beer name={item.name} />
      ))}
    </div>
  );
}

export default App;
```
***


# TIL(190813) - React 02
***
<img src="/images/key_prop_warning.png">
- props를 전달할 때 고유값을 전달하지 않으면 위와 같이 경고가 뜬다.
- 따라서 props에 ID를 만들고 아래와 같이 key로 넘겨야 함.
```javascript
{BeerBox.map(beer => (
  <Beers key={beer.id} name={beer.name} picture={beer.image} />
))}
```

- `npm i prop-types`
  - props가 잘못 전달 되었을 때 이를 알려주는 도구

