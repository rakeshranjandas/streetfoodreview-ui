import React from "react";

export default function User(props) {
  const [followed, setFollowed] = React.useState(true);

  function unfollowUser() {
    setFollowed(false);
  }

  function followUser() {
    setFollowed(true);
  }

  return (
    <div className="user-card">
      <p>{props.userDetails.name}</p>
      <p>{props.userDetails.email}</p>
      <p>
        {followed ? (
          <button onClick={unfollowUser}>Unfollow</button>
        ) : (
          <button onClick={followUser}>Follow</button>
        )}
      </p>
    </div>
  );
}
