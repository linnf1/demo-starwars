import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import { stars } from '../stars';
import starsvid from './Stars.mp4'

class App extends Component {
  //we need a constructor since we are bringing in the API
  //anything in consturctor or render, makeing own meoths use arrow funct syntax
  constructor() {
    super();
      this.state = {
        stars: [],
        searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ stars: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const filteredStars = this.state.stars.filter(star => {
      return star.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    if(this.state.stars.length === 0){
      return <h1> Loading..</h1>
    }else {
      return (
      <div className="App tc ">
      <h1>StarWars </h1>
      <p>Choose your Hero:</p>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList stars={filteredStars}/>
        <div className="fullscreen-bg">
          <video className='fullscreen-bg__video' autoPlay loop muted>
          <source src={starsvid} type='video/mp4' />
          </video>
        </div>
      </div>
    );

    }
    
  }
}

export default App;
