import React, { useEffect, useState } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import Loading from '../Shared/Loading.js'
import auth from '../DB/firebase.init'
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

  useEffect(() => {
    setGoogleError('Error in login with google')
    const timer = setTimeout(() => {
      setGoogleError('')
    }, 3000)
    return () => clearTimeout(timer)
  }, [error])
  if (loading) {
    return <Loading />
  }
  if (user) {
    console.log(user)
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
      <span className="text-red-600">{googleError ? googleError : ''}</span>
    </>
  )
}

export default Google
