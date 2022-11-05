import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  return (
    false ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoute