import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profile";

const Profile = ({ getProfileById, match, profile: { profile } }) => {
  useEffect(() => {
    console.log("id is", match.params.id, getProfileById(match.params.id));
  }, [getProfileById]);
  return <div>Profile</div>;
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
