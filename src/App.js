import React from 'react';
import axios from 'axios';

const movieList = 'https://yts.lt/api/v2/list_movies.json';
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get(movieList);  
    this.setState({ movies });
    console.log(movies);
    setTimeout(this.setState({ isLoading: false }), 3000);
  }
  componentDidMount() {
    this.getMovies();
    console.log('get movies');
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? 'Loading...' : 'We Are Ready!'}</div>
    );
  }
}

export default App;