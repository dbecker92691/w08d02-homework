import React, { Component } from 'react';
import Login from './Login/Login';
import Weather from './WeatherContainer/WeatherContainer'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: '',
      weather: []
    }
  }
  getWeather = async () => {
    try {
      const weatherApi = await fetch('http://api.openweathermap.org/data/2.5/weather?zip=80204,us&APPID=42cc72bd45edbc58f7d1ff378f21b1d8');
      const weatherJson = await weatherApi.json();
      console.log(weatherJson)
      return weatherJson;
    } catch (err) {
      return err
    }
  }
  componentDidMount(){
    this.getWeather().then((data) => this.setState({weather: data}));
  };
  handleLogin = (username, isLoggedIn) => {

    this.setState({
      username: username,
      logged: isLoggedIn
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.logged ? <Weather weather={this.state.weather}/> : <Login handleLogin={this.handleLogin} />}
      </div>
    );
  }
}

export default App;
