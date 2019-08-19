import React from 'react';
import axios from 'axios';
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      'https://yts.lt/api/v2/list_movies.json?sort_by=rating'
      ); 
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? 'Loading...' : 'We Are Ready!'}</div>
    );
  }
}

export default App;