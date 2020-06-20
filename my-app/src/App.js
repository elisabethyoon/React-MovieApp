import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movieTitles = [
  "Martrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://lh3.googleusercontent.com/proxy/zasogXLCIw1trzD5RzAJYH72jdyo6o00RMRFAnqSGGim_-y-cQYms2VnTnXyhRQuALMMuNWHm095aPu6ELmXLO_ueV9o2kOufNuzoAPZJ5K8VpeFRtQ5",
  "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg",
  "https://pbs.twimg.com/media/ELbvxLKVAAEU9dn.jpg"
]



function App() {
  return (
    <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]}/>
      <Movie title={movieTitles[1]} poster={movieImages[1]}/>
      <Movie title={movieTitles[2]} poster={movieImages[2]}/>
      <Movie title={movieTitles[3]} poster={movieImages[3]}/>
    </div>
  );
}

export default App;
