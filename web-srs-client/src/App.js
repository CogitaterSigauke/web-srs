import React, { Component } from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import login   from './pages/login';
import addCard from './pages/addCard';
import signup  from './pages/signup';
import admin  from './pages/admin'; 
import review  from './pages/review';
import home    from './pages/home';
import AuthRoute from './util/AuthRoute';
import axios from 'axios';

import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import {logoutUser, getUserDetails} from './redux/actions/userActions';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import themeObject from './util/theme';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles;
import jwtDecode from 'jwt-decode';


axios.defaults.baseURL = "http://localhost:8080/api";

const theme = createMuiTheme(themeObject);

const token = localStorage.tokenId;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    const userData = {
      name: decodedToken.name,
      email: decodedToken.email,
      familyName: decodedToken.family_name,
    };
    store.dispatch(getUserDetails(userData));
  }
}

class App extends Component {
  render() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
            <Router>
              <Navbar history={this.props.history}/>
              <div className="container">
                <Switch>  
                  <Route exact path="/" component={home}/>
                  <AuthRoute exact path="/login" component={login}/>
                  <AuthRoute exact path="/signup" component={signup}/>                  
                  <Route exact path="/addCard" component={addCard}/>
                  <Route exact path="/review" component={review}/>
                  <Route exact path="/admin" component={admin}/>     
                </Switch>
              </div>
            </Router>
        </div>
      </Provider>      
    </MuiThemeProvider>
  );
  }
}

export default App;
