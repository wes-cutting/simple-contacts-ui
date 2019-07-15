import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class extends Component {
  state = {
    email: "",
    emailConfirm: "",
    redirect: false
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.email !== this.state.emailConfirm) {
      alert("Emails don't match");
      return;
    }
    const { email } = this.state;
    alert(`Reset Link sent to ${email}`);
    this.setState({ redirect: true });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const title = "Reset Password";
    const willRedirect = this.state.redirect;
    return (
      <>
        {willRedirect ? (
          <Redirect to="/" />
        ) : (
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
                type="email"
                placeholder="Confirm Email"
                name="emailConfirm"
                onChange={this.handleChange}
                required
              />
              <button type="submit">{title}</button>
            </form>
          </fieldset>
        )}
      </>
    );
  }
}
