import React, { Component } from 'react';
import SignUpForm from './components/form/signUpForm/SignUpForm';
import LandingPage from './components/form/signInForm/SignInForm';
import DashBoard from './components/dashBoard/DashBoard';
import Board from './components/dashBoard/board/Board';
import PageNotFound from './components/error/PageNotFound';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signUpForm" component={SignUpForm} />
          <Route exact path="/dashBoard" component={DashBoard} />
          <Route exact path="/pageNotFound" component={PageNotFound} />
          <Route exact path="/dashBoard/board/:boardId" component={Board} />
        </div>
      </BrowserRouter>
        </div>
    );
  }
}

export default App;
