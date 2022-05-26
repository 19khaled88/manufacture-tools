import React, { useEffect, useState } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import useRegister from '../CustorHook/useRegister'
import auth from '../DB/firebase.init'
import Loading from '../Shared/Loading.js'
const Google = () => {
  const [googleError, setGoogleError] = useState('')
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  // if (error) {
  //   return setGoogleError(error.message)
  //   // return (
  //   //   <div>
  //   //     <p>{error.message}</p>
  //   //   </div>
  //   // )
  // }
  const navigate = useNavigate()
  const [userToken] = useRegister(user)
  useEffect(() => {
    // setGoogleError('Error in login with google')
    const timer = setTimeout(() => {
      setGoogleError('')
    }, 3000)
    return () => clearTimeout(timer)
  }, [error])

  if (loading) {
    return <Loading />
  }
  // if (user) {
  //   console.log(user)
  // }
  if (userToken) {
    navigate('/dashboard')
  }
  return (
    <>
      <div className="divider mt-0 mb-0">OR</div>
      <button
        className="btn btn-wide btn-outline btn-xs"
        onClick={() => signInWithGoogle()}
      >
        Login with google
      </button>
      <span className="text-red-600">
        {error ? 'Error in login with google' : ''}
      </span>
    </>
  )
}

export default Google
