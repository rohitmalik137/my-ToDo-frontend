import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import WelcomePage from './pages/welcome/welcome.component';
import LoginPage from './pages/login/login.component';
import SignupPage from './pages/signup/signup.component';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
