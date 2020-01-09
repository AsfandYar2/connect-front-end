import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

const Register = ({ setAlert, register, isAuthenticated, error }) => {
  useEffect(() => {
    if (error !== null && error !== undefined) {
      setAlert(error);
      // alert(error);
    }
  }, [error]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password not Match", "danger");
    } else {
      const newUser = {
        name,
        email,
        password
      };
      console.log(newUser);
      register(newUser);
    }
  };
  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <h1 className="large text-primary"> Sign Up </h1>{" "}
      <p className="lead">
        <i className="fas fa-user"> </i> Create Your Account{" "}
      </p>{" "}
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>{" "}
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <small className="form-text">
            {" "}
            {/* This site uses Gravatar so if you want a profile image, use a
                        Gravatar email */}{" "}
          </small>{" "}
        </div>{" "}
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
        </div>{" "}
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
            minLength="6"
          />
        </div>{" "}
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>{" "}
      <p className="my-1">
        Already have an account ? <Link to="/login"> Sign In </Link>
      </p>
    </>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error
});

export default connect(mapStateToProps, { setAlert, register })(Register);
