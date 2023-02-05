import React from "react";

export default function User(props) {
  const [followed, setFollowed] = React.useState(true);

  function unfollowUser() {
    fetch(
      `http://localhost:8081/v1/user/1/friend/${props.userDetails.id}?type=unfollow`,
      { method: "PUT" }
    ).then(() => setFollowed(false));
  }

  function followUser() {
    fetch(
      `http://localhost:8081/v1/user/1/friend/${props.userDetails.id}?type=follow`,
      { method: "PUT" }
    ).then(() => setFollowed(true));
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
