import React from "react";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: { company, website, status, location, bio, social, skills, user }
}) => {
  return (
    <div className="profile bg-light">
      <div>
        Name:{" "}
        <h3>
          <b>{user && user.name}</b>
        </h3>
        <p className="my-1">{user && <span>{user.email}</span>}</p>
      </div>
      <p>
        Status: <b> {status}</b>
        {company && (
          <span>
            {" "}
            at <b>{company}</b>
          </span>
        )}
      </p>

      <p className="my-1">
        {location && (
          <span>
            Location <b>{location}, Pakistan</b>
          </span>
        )}
      </p>
      <p>{bio && <b>{bio}</b>}</p>

      <div>
        <Link
          to={user && `/profile/${user._id}`}
          className="btn btn-primary btn-sm"
        >
          View Profile
        </Link>
      </div>
      <ul>
        <b>Skills</b>{" "}
        {skills.slice(0, 4).map(skill => {
          return <li> {skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProfileItem;
