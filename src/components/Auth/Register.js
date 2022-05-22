import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Google from './Google'
import Login from './Login'
import Signup from './Signup'
const Register = () => {
  const [state, setState] = useState('login')
  let navigate = useNavigate()
  let location = useLocation()

  const loginPageRedirect = (login) => {
    setState(login)
  }
  const signupPageRedirect = (signup) => {
    setState(signup)
  }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen pt-[-50]">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body flex flex-col justify-center items-center">
            {state === 'login' ? (
              <Login signupPageRedirect={signupPageRedirect}></Login>
            ) : (
              <Signup loginPageRedirect={loginPageRedirect}></Signup>
            )}

            <Google></Google>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
