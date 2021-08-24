import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import reactDom from "react-dom";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },

    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  username = React.createRef();

  doSubmit = () => {
    console.log("Submitted!");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
