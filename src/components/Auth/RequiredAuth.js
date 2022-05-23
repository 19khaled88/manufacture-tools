import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../DB/firebase.init';
import Loading from '../Shared/Loading';
const RequiredAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    if(loading){
        return <div className="mt-24"><Loading></Loading></div>

    }

    if(!user){
        return <Navigate to="/register" state={{from :location}} replace/>
    }
  return children
}

export default RequiredAuth;
