import React , { Component }from 'react';
import './App.css';
import Movie from './Movie';
import axios from 'axios';
// 생활코딩 리액트
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from './components/Subject'


// 노마드코더 영화앱
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

  // 생활코딩
  constructor(props){ // 컴포넌트가 실행될 때 constructor라는 함수가 있으면 젤 먼저 실행되서 초기화를 담당한다.
    super(props);
    this.state = {
      subject: {title:'web', sub: 'world wide web'},
      contents: [
        {id:1, title:'HTML', desc: 'HTML is aaaa'},
        {id:2, title:'CSS', desc: 'CSS is bbbb'},
        {id:3, title:'JavaScript', desc: 'JavaScript is vvvv'},
      ]
    }
  }

  render() {
    return (
      // 노마드코더 영화앱
      // <div className="App">
      //   {this.state.movies ? this._renderMovies() : 'Loading'}
      //   {/* {this.state.movies.map( (movie, index) => {
      //     return <Movie title={movie.title} poster={movie.poster} key={index} />
      //   })} */}
      // </div>

      // 생활코딩 리액트
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is dkdkdk"></Content>
      </div>
    )
  }
}

// 노마드코더 영화앱 함수형
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
