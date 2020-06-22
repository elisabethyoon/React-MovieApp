import React , { Component }from 'react';
import './App.css';
import Movie from './Movie'

const movies =[
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
]

class App extends Component {
  
  state = {
    greeting: 'hello!'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: 'hello again!'
      })
    }, 2000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map( (movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
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
