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
      mode: 'read',
      subject: {title:'web', sub: 'world wide web'},
      welcome:{title:'welcome', desc:'hello, react!!'},
      contents: [
        {id:1, title:'HTML', desc: 'HTML is aaaa'},
        {id:2, title:'CSS', desc: 'CSS is bbbb'},
        {id:3, title:'JavaScript', desc: 'JavaScript is vvvv'},
      ]
    }
  }

  render() {
    // 생활코딩 리액트
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    const list1 = (e) => {
      e.preventDefault();
      this.setState({mode:'read'})
    }

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
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'})
          }.bind(this)}
        >
        </Subject>
        <TOC
          onChangePage={list1}
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
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
