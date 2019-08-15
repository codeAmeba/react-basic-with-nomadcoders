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
<img src="key_prop_warning.png" />

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
- 위의 경우는 state를 변경하기 때문에 좋은 방법은 아님,
- 아래와 같이 current의 사용을 권함
```javascript
  plus = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
```

## (중요)setState를 호출할 때마다 react는 새로운 state로 render를 다시 한다.


# TIL(190815) - React 04
***
- class component는 render 외에도 많은 것을 갖고 있다.
- 그 중의 하나가 life cycle method
  - life cycle method는 react가 component를 생성하고 없애는 방법
  - component가 생성될 때 render 이전에 호출되는 함수들이 있고, 이후에 호출되는 함수들이 있다.
  - mounting / unmounting
  - updating
```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("this is constructor");
  }
  state = {
    count: 0
  };
  plus = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  render() {
    console.log('this is render');
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

<img src="constructor_first.png">
- constructor는 render보다 먼저 호출된다.


```javascript
class App extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 3000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We Are Ready!'}</div>;
  }
}
```
- componentDidMount는 render 이후에 호출된다.

#### 참고자료
- https://reactjs-kr.firebaseapp.com/docs/state-and-lifecycle.html


## Axios
- fetch처럼 데이터를 받아올 때 사용함
- async/await과 같이 사용 가능
  - ex) axios가 데이터를 다 받아올 때까지 기다려달라

```javascript
  getMovies = async () => {
    const movies = await axios.get('https://yts.lt/api/v2/list_movies.json');  
  }
```



