import React, { Component } from "react";
import {Redirect} from 'react-router-dom'

export default class extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    passwordConfirm: "",
    redirect: false
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.password !== this.state.passwordConfirm){
      alert("Passwords don't match")
      return
    }
    const { passwordConfirm, redirect, ...contact } = this.state;
    if(!this.props.addContact(contact)){
      alert('Invalid User, Try Again')
    }else {
      alert("User Created!");
      this.setState({redirect:true})
    }
  };

  handleChange = ({ target }) => {
    this.setState( { [target.name]: target.value } );
  };

  render() {
    const title = "Register";
    const willRedirect = this.state.redirect
    return (
      <>
        { willRedirect ? <Redirect to='/'/> :
          <fieldset className="center">
            <legend>{title}</legend>
            <form className="flexbox" onSubmit={this.handleSubmit}>
              <input
                type="input"
                placeholder="First Name"
                name="firstName"
                onChange={this.handleChange}
                required
              />
              <input
                type="input"
                placeholder="Last Name"
                name="lastName"
                onChange={this.handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                onChange={this.handleChange}
                required
              />
              <input
                type="number"
                placeholder="Age"
                name="age"
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
              <input
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirm"
                onChange={this.handleChange}
                required
              />
              <button type="submit">{title}</button>
            </form>
          </fieldset>
        }
      </>
    );
  }
}
