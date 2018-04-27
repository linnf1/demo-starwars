import React, { Component } from 'react';
import Card from '../components/Card';
import './App.css';
import stars from '../stars';

class App extends Component {
  //we need a constructor since we are bringing in the API
  constructor(props) {
    super(props);
      this.state = {
        people: [],
    }
  }
  render() {
    return (
      <div className="App tc">
      <h1>StarWars </h1>
      <p>Choose your Hero..</p>
      <Card id={stars[0].id} name={stars[0].name} gender={stars[0].gender} birth_year={stars[0].birth_year}/>
      </div>
    );
  }
}

export default App;
