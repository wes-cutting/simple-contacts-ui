import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      redirect: false
    };
  }
  

  handleSubmit = event => {
    event.preventDefault();
    const { redirect, ...login } = this.state;
    if (!this.props.login(login)) {
      alert("Invalid User, Try Again");
    } else {
        alert("Successfully Logged In");
      this.setState({ redirect: true });
    }
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const title = "Login";
    const willRedirect = this.state.redirect
    return (
        <>
      {willRedirect ? <Redirect to='/'/>:
      <fieldset className="center">
        <legend>{title}</legend>
        <form className="flexbox" onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
            required
          />
          <button type="submit">{title}</button>
        </form>
        <div>
          Did you forget your password? <Link to="/forgot">Click here</Link>
        </div>
      </fieldset>}
      </>
    );
  }
}

export default Login
