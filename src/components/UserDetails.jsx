import React from "react";
import loader from "./loader.gif";

export const Loader = ({ loading }) =>
  loading && (
    <span>
      <img src={loader} alt="loader" />
    </span>
  );

export const User = ({ user = {}, error }) => (
  <React.Fragment>
    {error ? (
      <span className="oops">!OOPS Something went Wrong</span>
    ) : (
      user && (
        <React.Fragment>
          <img src={user.avatar} alt="avaltar" />
          <div className="description">
            <span>Id: {user.id}</span>
            <span>
              Name :{user.first_name} {user.last_name}
            </span>
          </div>
        </React.Fragment>
      )
    )}
  </React.Fragment>
);

export const UserDetails = ({ user, loading, error }) => (
  <div className="user">
    <Loader loading={loading} />
    <User user={loading ? null : user} error={error} />
  </div>
);
