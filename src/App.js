import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Body from "./components/layout/Body";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import SetAuthToken from "./utils/SetAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import Createprofile from "./components/profileform/Createprofile";
import Editprofile from "./components/profileform/Editprofile";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import { loadUser } from "./actions/auth";
// Redux
import { Provider } from "react-redux";
import store from "./store";
store.subscribe(() => console.log("store in index ", store.getState()));

if (localStorage.token) {
  SetAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Body} />
          <Route exact path="/" component={Footer} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />{" "}
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={Createprofile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={Editprofile}
              />
              <PrivateRoute exact path="/posts" component={Posts} />
            </Switch>{" "}
          </section>{" "}
        </Fragment>{" "}
      </Router>
    </Provider>
  );
}

export default App;
