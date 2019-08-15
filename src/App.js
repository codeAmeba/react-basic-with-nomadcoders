import React from 'react';
import axios from 'axios';
import { async } from 'q';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get('https://yts.lt/api/v2/list_movies.json');  
  }
  acomponentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We Are Ready!'}</div>;
  }
}

export default App;