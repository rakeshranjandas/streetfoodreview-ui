import React from "react"
import profile_picture from "./profile_generic.jpeg"

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img src={profile_picture} alt="user" />
    </div>
  )
}

export default UserProfile
