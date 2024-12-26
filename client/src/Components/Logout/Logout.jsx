import React from 'react'
import { logoutUserData } from '../../http'
import { Link } from 'react-router-dom'

function Logout({setIsAuthenticated}) {

    const handleLogout = async() =>{
        await logoutUserData()
        setIsAuthenticated(false)
    }

  return (
    <Link to={'/'}>
      <button onClick={handleLogout}>Logout</button>
    </Link>
  )
}

export default Logout
