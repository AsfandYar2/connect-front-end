import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile, deleteProfile } from "../../actions/profile";
import DashboardActions from "./DashboardActions";

const Dashboard = ({
  getCurrentProfile,
  deleteProfile,
  auth,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <h2>
        Welcome <i>Mr. {auth.user && auth.user.name}</i>
      </h2>
      {console.log(profile)}
      {profile === null ? (
        <Fragment>
          <p>You Have not Yet profile ,Please Add Some info</p>
          <Link to="/create-profile" className="btn btn-primary md">
            Create Profile
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <h3>Here is your profile</h3>
          <p>{profile.skills}</p>
          <p>
            <DashboardActions />
          </p>
          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteProfile()}>
              Delete My Account
            </button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  loading: state.loading
});

export default connect(mapStateToProps, { getCurrentProfile, deleteProfile })(
  Dashboard
);
