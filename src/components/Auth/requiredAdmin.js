import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import useAdmin from '../CustorHook/useAdmin'
import auth from '../DB/firebase.init'
import Loading from '../Shared/Loading'
const RequiredAdmin = ({ children }) => {
  const [user, loading, error] = useAuthState(auth)
  const [admin, adminLoading] = useAdmin(user)
  const location = useLocation()
  if (loading || adminLoading) {
    return (
      <div className="mt-24">
        <Loading></Loading>
      </div>
    )
  }

  if (!user || !admin) {
    signOut(auth)
    return <Navigate to="/register" state={{ from: location }} replace />
  }
  return children
}

export default RequiredAdmin
