import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login'
import Weather from './WeatherContainer/WeatherContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: ''
    }
  }
  handleLogIn = (username, isLoggedIn) =>{
    this.setState({
      username: username,
      loggedIn: isLoggedIn
    })

  }
  render() {
    return (
      <div className="App">
      {this.state.logged ? <Weather username={this.state.username}/> 
      : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
