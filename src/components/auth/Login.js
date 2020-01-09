import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import axios from "axios";
import { login } from "../../actions/auth";

const Login = ({ setAlert, login, isAuthenticated, error }) => {
  useEffect(() => {
    if (error === "Invalid Email or Password") {
      setAlert(error);
    }
  }, [error]);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  // console.log(error);
  const { email, password } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = async e => {
    e.preventDefault();
    if (email === "" || password === "") {
      console.log("enter email or pass");
    } else {
      login(formData);
    }
    console.log(formData);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <h1 className="large text-primary"> Sign In </h1>
      <p className="lead">
        <i className="fas fa-user"> </i> Login Your Account{" "}
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        If you don 't have account ? <Link to="/register"> Register </Link>{" "}
      </p>{" "}
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error
});

export default connect(mapStateToProps, { setAlert, login })(Login);
