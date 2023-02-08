import React from "react"
import Reviews from "./Reviews"
import Friends from "./Friends"
import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom"

export default function UserDisplay() {
  const location = useLocation()
  const navigate = useNavigate()

  React.useEffect(
    function () {
      if (location.pathname === "/") navigate("/reviews")
    },
    [location, navigate]
  )

  return (
    <div className="container">
      <div class="tabs is-toggle">
        <ul>
          <CustomLi to="/reviews">Reviews</CustomLi>
          <CustomLi to="/friends">Friends</CustomLi>
        </ul>
      </div>
      <Routes>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  )
}

function CustomLi({ to, children, ...props }) {
  const location = useLocation()

  return (
    <li className={location.pathname === to ? "is-active" : ""}>
      <Link to={to}>
        <span>{children}</span>
      </Link>
    </li>
  )
}
