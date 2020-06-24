// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class 형 컴포넌트
// class Movie extends Component{

// 	static propTypes = {
// 		title: PropTypes.string.isRequired,
// 		poster: PropTypes.string.isRequired
// 	}


// 	render(){
// 		return(
// 			<div>
// 				<h1>{this.props.title}</h1>
// 				<MoviePoster poster={this.props.poster}/>
// 			</div>
// 		)
// 	 }
// }

// 함수형 컴포넌트
function Movie({title, poster}){
	return (
		<div>
			<h1>{title}</h1>
			<MoviePoster poster={poster}/>
		</div>
	)
}

// 함수형 propsTypes check
Movie.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired
}



// class 형 컴포넌트
// class MoviePoster extends Component{

// 	static propTypes = {
// 		 poster: PropTypes.string.isRequired
// 	}

// 	render(){
// 		console.log(this.props)
// 		return(
// 			<img src={this.props.poster} alt="Movie Poster"/>
// 		)
// 	}
// }


// 함수형 컴포넌트
function MoviePoster({poster}) {
	return (
		<img src={poster} alt="Movie Poster"/>
	)
}

// 함수형 propsTypes check
MoviePoster.propTypes = {
	poster: PropTypes.string.isRequired
}

export default Movie