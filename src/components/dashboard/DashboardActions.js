import React from "react";
import { Link, Redirect } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div class="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i class="fas fa-user-circle text-primary"></i> Edit Profile
      </Link>
    </div>
  );
};

export default DashboardActions;
