import React, { Component } from 'react';
import Movie from './components/Movie.js';
import Favorite from './components/Favorite.js';
import './App.css';

class App extends Component {

state = {
   movies: [],
   favorites: []
 }



  componentDidMount() {
   fetch('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json')
      .then(res => res.json())
      .then(datas => this.setState({ movies: datas.movies }))
  }

  addMovie = (movieName) => {
    const newMovie = this.state.movies.find(movie => movie.title === movieName)
    this.setState({ favorites: [newMovie, ...this.state.favorites]})
  }

  removeMovie = (movieName) => {
    const notFav = this.state.favorites.filter(favorites => favorites.title !== movieName)
    this.setState({ favorites: notFav })
  }

  render() {

    console.log(this.state.favorites)

    const showMovie = this.state.movies.map(movie => <Movie key={movie.id} title={movie.title} year={movie.year} image={movie.posterUrl} addM={this.addMovie}/>)

    const showFavorite = this.state.favorites.map(favorite => <Favorite name={favorite.title} key={favorite.id} year={favorite.year} image={favorite.posterUrl} remove={this.removeMovie}/>)

    return ( 

      <div className="App">

        <span>LIST OF FAVORITES</span>
        <div>{ showFavorite }</div>
        
        <span>LIST OF MOVIES</span>
        <div>{ showMovie }</div>


      </div>
    );
  }
}

export default App;
