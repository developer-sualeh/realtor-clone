import React from 'react'
import { useLocation } from 'react-router-dom'
function Profile() {
    const location = useLocation()
  return (
    <div>
      <p>Pathname: {location.pathname}</p>
      <p>
        Search Parameter: {new URLSearchParams(location.search).get('name')}
      </p>
    </div>
  )
}
export default Profile;