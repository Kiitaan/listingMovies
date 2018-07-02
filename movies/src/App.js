import React, { Component } from 'react';
import Movie from './components/Movie.js';
import Favorite from './components/Favorite.js';
import Random from './components/Random.js';
import './App.css';

class App extends Component {

state = {
   movies: [],
   favorites: [],
   random: []
 }



  componentDidMount() {
   fetch('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json')
      .then(res => res.json())
      .then(datas => this.setState({ movies: datas.movies }))
  }

  addMovie = (movieId) => {
    const newMovie = this.state.movies.find(movie => movie.id === movieId)

    const MovieUnique = this.state.favorites.find(movie => movie.id === movieId)
      
      if (MovieUnique === undefined) {
         this.setState({ favorites: [newMovie, ...this.state.favorites]})
      } else {
        ''
      }
  }

  removeFavMovie = (movieName) => {
    const notFav = this.state.favorites.filter(favorite => favorite.title !== movieName)
    this.setState({ favorites: notFav })
  }

  randomMovie = (movieName) => { 
    const favRandom = this.state.favorites[Math.floor(Math.random()*this.state.favorites.length)]
    this.setState({ random: [favRandom, ...this.state.random]})
  }


  render() {

    const showMovie = this.state.movies.map(movie => <Movie key={movie.id} title={movie.title} year={movie.year} image={movie.posterUrl} addM={this.addMovie} id={movie.id}/>)

    const showFavorite = this.state.favorites.map(favorite => <Favorite name={favorite.title} key={favorite.id} year={favorite.year} image={favorite.posterUrl} remove={this.removeFavMovie}/>)

    const showRandom = this.state.random.map(random => <Random name={random.title} key={random.id} year={random.year} image={random.posterUrl} random={this.randomMovie}/>)

    const showButtonRandom = <button onClick= {() => this.randomMovie()}>RANDOM</button> 

    if (this.state.favorites.length === 0) {
      
      return (

      <div className="App">
        
        <span>THE RANDOM MOVIE</span>
        <div>{ showRandom }</div>

        <span>LIST OF FAVORITES</span>
        <div>{ showFavorite }</div>
        
        <span>LIST OF MOVIES</span>
        <div>{ showMovie }</div>

      </div>

        )

    } else {

    return ( 

        <div className="App">

          <div>{ showButtonRandom }</div>
        
          <span>THE RANDOM MOVIE</span>
          <div>{ showRandom }</div>

           <span>LIST OF FAVORITES</span>
          <div>{ showFavorite }</div>
        
          <span>LIST OF MOVIES</span>
          <div>{ showMovie }</div>

        </div>
    )
   }
  }
}

export default App;
