import React , { Component }from 'react';
import './App.css';
import Movie from './Movie'



class App extends Component {

  state = {

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster:"https://upload.wikimedia.org/wikipedia/ko/thumb/2/26/%EB%A7%A4%ED%8A%B8%EB%A6%AD%EC%8A%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EB%A7%A4%ED%8A%B8%EB%A6%AD%EC%8A%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
          },
          {
            title: "Full Metal Jacket",
            poster:"https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg",
          },
          {
            title: "Oldboy",
            poster:"https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg",
          },
          {
            title: "Star Wars",
            poster:"https://secimage.yes24.com/goods/22343246/L"
          },
          {
            title: "Trainspotting",
            poster: "https://i.pinimg.com/originals/95/fc/b7/95fcb710bd070a1c99096525ce4e4241.jpg"
          }
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
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
