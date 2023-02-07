import React from "react"

export default function User(props) {
  const [followed, setFollowed] = React.useState(true)

  function unfollowUser() {
    fetch(
      `http://localhost:8081/v1/user/1/friend/${props.userDetails.id}?type=unfollow`,
      { method: "PUT" }
    ).then(() => setFollowed(false))
  }

  function followUser() {
    fetch(
      `http://localhost:8081/v1/user/1/friend/${props.userDetails.id}?type=follow`,
      { method: "PUT" }
    ).then(() => setFollowed(true))
  }

  return (
    <div className="user-card card columns">
      <p className="card-header-title column">{props.userDetails.name}</p>
      <p className="card-content column">{props.userDetails.email}</p>
      <p className="card-content column has-text-centered">
        {followed ? (
          <button onClick={unfollowUser} className="button is-danger is-small">
            Unfollow
          </button>
        ) : (
          <button onClick={followUser} className="button is-link is-small">
            Follow
          </button>
        )}
      </p>
    </div>
  )
}
