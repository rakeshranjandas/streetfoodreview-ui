import React from 'react'
import Reviews from './Reviews'
import Friends from './Friends'
import { Route, Routes, Link, useResolvedPath, useMatch } from 'react-router-dom'

export default function UserDisplay() {

  return (
    <div className="user-display">
        <ul>
            <CustomLink to="/reviews"> Reviews </CustomLink>
            <CustomLink to="/friends"> Friends </CustomLink>
        </ul>


        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>

    </div>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return <li className={isActive?'active':''}><Link to={to}> {children} </Link></li>;
}
