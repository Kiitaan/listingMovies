import React, { Component } from 'react';
import './App.css';

class App extends Component {
<<<<<<< HEAD

state = {
   movies: []
 }

  componentDidMount() {
   fetch('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json')
      .then(res => res.json())
      .then(datas => this.setState({ movies: datas.movies }))
  }

  render() {

    console.log('render', this.state)

    return (

      <div className="App">
        
      </div>
    );
  }
}

export default App;
