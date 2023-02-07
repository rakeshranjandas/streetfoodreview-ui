import React from "react"
import Reviews from "./Reviews"
import Friends from "./Friends"
import {
  Route,
  Routes,
  Link,
  useResolvedPath,
  useMatch,
  Navigate,
} from "react-router-dom"

export default function UserDisplay() {
  return (
    <div className="user-display container">
      <ul className="columns">
        <CustomLink to="/reviews"> Reviews </CustomLink>
        <CustomLink to="/friends"> Friends </CustomLink>
      </ul>

      <Routes>
        <Route path="/" element={<Navigate to="/reviews" />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link
      to={to}
      className={
        (isActive ? "active" : "") + " column is-one-fifth has-text-centered"
      }
    >
      <li>{children}</li>
    </Link>
  )
}
