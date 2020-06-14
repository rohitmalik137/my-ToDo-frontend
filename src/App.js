import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import WelcomePage from './pages/welcome/welcome.component';
import LoginPage from './pages/login/login.component';
import SignupPage from './pages/signup/signup.component';

class App extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        showBackdrop: false,
        showMobileNav: false,
        isAuth: false,
        token: null,
        userId: null,
        authLoading: false,
        error: null
      }
  }

  loginHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error('Validation failed.');
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({
          isAuth: true,
          token: resData.token,
          authLoading: false,
          userId: resData.userId
        });
        localStorage.setItem('token', resData.token);
        localStorage.setItem('userId', resData.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err
        });
      });
  };

  signupHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch('http://localhost:8080/auth/signup', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Creating a user failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({ isAuth: false, authLoading: false });
        // this.props.history.replace('/');
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err
        });
      });
  };

  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route 
              path='/login' 
              exact
              render={props => (
                <LoginPage
                  {...props}
                  onLogin={this.loginHandler}
                />
              )}
            />
            <Route 
              path='/signup'
              exact 
              render={props => (
                <SignupPage
                  onSignup={this.signupHandler}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
