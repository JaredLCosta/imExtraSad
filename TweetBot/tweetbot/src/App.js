import React, { Component } from 'react';
import './App.css';
import NavBar from './home/Navbar';
import Auth from './auth/Auth';
import Rand from './home/Rand';
import { ListView } from './home/ListView';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
var buttonStyle = {

}
var letsTweetTag = {
  fontSize: '30px',
  textAlign: 'center',
  color: 'white',
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      sessionToken: '',
      showList: false
    }
  }
  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState((prevState, props) => {
      const t = token
      console.log(t)
      return Object.assign(prevState, {sessionToken: t})
    });
  }
  componentWillMount() {
    const token = localStorage.getItem('token')
    if (token && !this.state.sessionToken){
      this.setState((prevState, props) => {
        return Object.assign(prevState, {sessionToken: token});
      });
    }
  }
  logOut = () => {
    localStorage.clear()
    this.setState((prevState, props) => ({...prevState, sessionToken: ''}));
  }
  toggleList = () => {
    this.setState(function(prevState, props) {
      return Object.assign(prevState, {showList: !this.state.showList});
    });
  }
  protectedViews = () => {
    if(this.state.sessionToken === localStorage.getItem('token') && localStorage.getItem('token') !== 'undefined'){
      return(
        <Route>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '90%'}}>
            <div className='tweetContainer' style={{flex: 1}}>
              <div style={letsTweetTag}>
                Lets Tweet!
              </div>
              <button onClick={() => this.toggleList()}>Toggle List</button>
              <div style={buttonStyle}>
                {this.state.showList ? <ListView /> : <Rand />}
              </div>
            </div>
          </div>
        </Route>
      )
    } else {
      return(
        <Route path='/auth'>
          <Auth setToken={this.setSessionState} />
        </Route>
      )
    }
  }
  render() {
    return(
      <Router>
        <div>
          <NavBar logOut={this.logOut} />
          {this.protectedViews()}
        </div>
      </Router>
    );
  }
}

export default App;