import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class loginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //capturing state of inputs on change
  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log("I'm running")
    this.props.login(this.state.username, this.state.password);
    console.log("after props")
    // this.setState({
    //   redirectTo: "/"
    // });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="LoginForm">
          <h1>Login form</h1>
          <form>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>Login</button>
          </form>
        </div>
      );
    }
  }
}

export default loginForm;
