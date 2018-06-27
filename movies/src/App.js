import React, { Component } from 'react';
import Movie from './components/Movie.js'
import './App.css';

class App extends Component {

state = {
   movies: []
 }

  componentDidMount() {
   fetch('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json')
      .then(res => res.json())
      .then(datas => this.setState({ movies: datas.movies }))
  }

  render() {

    console.log(this.state)

    const movies = this.state.movies.map(movie => <Movie key={movie.id} title={movie.title} year={movie.year}/>)

    return ( 

      <div className="App">
        
        {movies}

      </div>
    );
  }
}

export default App;
