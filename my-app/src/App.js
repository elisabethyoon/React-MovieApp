import React , { Component }from 'react';
import './App.css';
import Movie from './Movie';
import axios from 'axios';



class App extends Component {

  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json/sort_by=rating')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))

    // return axios.get('https://yts.mx/api/v2/list_movies.json/sort_by=rating')
    // .then(response => console.log(response))
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
        {/* {this.state.movies.map( (movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })} */}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       {movies.map(movie => {
//         return <Movie title={movie.title} poster={movie.poster}/>
//       })}
//     </div>
//   );
// }

export default App;
