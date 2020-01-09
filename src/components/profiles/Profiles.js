import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";

const Profiles = ({ getProfiles, profile: { profiles } }) => {
  useEffect(() => {
    getProfiles();
  }, []);
  return (
    <Fragment>
      <h1>Users</h1>
      <div className="profiles">
        {profiles.length > 0
          ? profiles.map(profile => (
              <ProfileItem key={profile.id} profile={profile} />
            ))
          : "No Profiles available yet"}
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
