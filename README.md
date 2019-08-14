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
- props
	- [누구든지 하는 리액트 4편: props 와 state | VELOPERT.LOG](https://velopert.com/3629)
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
<img src="/images/key_prop_warning.png" />

- props를 전달할 때 고유값을 전달하지 않으면 위와 같이 경고가 뜬다.
- 따라서 props에 ID를 만들고 아래와 같이 key로 넘겨야 함.
```javascript
{BeerBox.map(beer => (
  <Beers key={beer.id} name={beer.name} picture={beer.image} />
))}
```

- `npm i prop-types`
  - props가 잘못 전달 되었을 때 이를 알려주는 도구
  - 아래와 같이 각 필요한 데이터의 타입을 명시해준다
```javascript
Beers.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
```
#### propTypes 참고
- https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html


# TIL(190814) - React 03
***
- 컴포넌트에서 다루는 데이터는 두 종류
	- props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값
	- state : 컴포넌트 내부에서 선언하고 내부에서 값을 변경할 수 있음.
- 받아온 props 값은 this로 조회 가능함
- 함수형 컴포넌트와 클래스형 컴포넌트의 주요 차이점
	- 함수형에는 state와 life cycle이 빠져있음
	- 함수형은 초기 마운트 속도가 약간 빠르고 불필요한 부분이 없어서 메모리를 덜 차지함

- 클래스형 컴포넌트
 - render() 필수
```javascript
class MyName extends Component {
  static defaultProps = {
    name: 'codeAmeba'
  }
  render() {
    return (
      <div>
        hello. My Name is {this.props.name}
      </div>
    )
  }
}
```

- 함수형 컴포넌트
```javascript
const MyName = ({name}) => {
  return <div>Hello. My Name is {name}</div>;
};

MyName.defaultProps = {
  name: 'codeAmeba'
};
```

- 동적인 데이터를 다룰 때에는 state를 사용함(ex: counter)
 - state는 클래스형 컴포넌트에서만 가능
```javascript
class App extends React.Component {
  state = {
    count: 0
  };
  plus = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  minus = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
```
