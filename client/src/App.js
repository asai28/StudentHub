import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "@progress/kendo-theme-default/dist/all.css";

// components
import LoginForm from "./Pages/Login/loginForm";
import SignupForm from "./Pages/signUpForm";
import Header from "./Components/Navbar";
import Home from "./Pages/Home";
import Internships from "./Pages/Internships";
import RateMyProfessor from "./Pages/RateMyProfessor";
// import Widgets from "./Pages/Widgets";
// import SchedulerContainer from "./Pages/SchedulerContainer";

const DisplayLinks = props => {
  if (props.loggedIn) {
    return (
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link" onClick={props._logout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              sign up
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null
    };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
  }
  componentDidMount() {
    axios.get("/auth/user").then(response => {
      console.log("BBBBBBBB" + JSON.stringify(response.data));
      if (!!response.data.user) {
        console.log("There is a user! YAY!");
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      } else {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  _logout(event) {
    event.preventDefault();
    console.log("Logging you out");
    axios.post("/auth/logout").then(response => {
      console.log(response.data);
      if (response.status === 200) {
        this.set({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  _login(username, password) {
    axios.post("/auth/login", { username, password }).then(response => {
      console.log(response);
      if (response.status === 200) {
        //update the state
        this.set({
          loggedIn: true,
          user: response.data.user
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        {/* <Header user={this.state.user} /> */}
        {/* LINKS to our different 'pages' */}
        <DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
        {/*  ROUTES */}
        <Route exact path="/" render={() => <Home user={this.state.user} />} />
        <Route
          exact
          path="/login"
          render={() => (
            <LoginForm
              _login={this._login}
              _googleSignin={this._googleSignin}
            />
          )}
        />
        <Route exact path="/signup" component={SignupForm} />
        {/* <Route exact path="/rmp" component={RateMyProfessor} /> */}
        {/* <Route exact path="/widgets" component={Widgets} /> */}
        {/* <Route exact path="/internships" component={Internships} /> */}
        {/* <LoginForm _login={this._login} /> */}
      </div>
    );
  }
}

export default App;
