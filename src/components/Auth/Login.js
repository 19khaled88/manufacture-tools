import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useRef, useState } from 'react'
import {
  useAuthState,
  useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../DB/firebase.init'
import Loading from '../Shared/Loading.js'

const Login = ({ signupPageRedirect }) => {
  const [loginError, setLoginError] = useState('')
  const [loginUser] = useAuthState(auth)
  const navigate = useNavigate()
  const location = useLocation()
  const emailRef = useRef('')
  let from = location.state?.from?.pathname || '/'
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  if (error) {
    setLoginError(error.message)
    // return (
    //   <div>
    //     <p>Error: {error.message}</p>
    //   </div>
    // );
  }
  if (loading) {
    return <Loading />
    // return <p>Loading...</p>;
  }
  if (user) {
    // navigate('/')
    navigate(from, { replace: true })
    // return (
    //   <div>
    //     <p>Signed In User:</p>
    //     <p>{loginUser.email}</p>
    //   </div>
    // );
  }

  const onSubmit = (data) => {
    const email = data.email
    const password = data.password
    signInWithEmailAndPassword(email, password)
  }

  const forgetPasswordHandler = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast('Password reset email sent!')
        e.target.reset()
      })
      .catch(() => {
        toast(error.message)
      })
  }
  return (
    <>
      <h4 className="cart-title">Login page</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label p-0">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered input-xs w-full max-w-xs"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required',
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide valid email',
              },
            })}
          />
          <label className="label pt-0 pb-1">
            {errors.email?.type === 'required' && (
              <span className="label-text-alt text-red-400">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className="label-text-alt text-red-400">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label p-0">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Your Password"
            className="input input-bordered input-xs w-full max-w-xs"
            {...register('password', {
              required: { value: true, message: 'Password is required' },
              minLength: { value: 6, message: 'Minimun length is 6' },
            })}
          />
          <label className="label pt-0 pb-1">
            {errors.password?.type === 'required' && (
              <span className="label-text-alt text-red-400">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === 'minLength' && (
              <span className="label-text-alt text-red-400">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <div className="flex flex-col mt-2">
          <span className="text-red-400">
            {' '}
            {loginError ? 'Error:' + loginError : ''}
          </span>
          <button className="btn btn-wide btn-xs" value="login" type="submit">
            Login
          </button>
        </div>
      </form>
      <div className="flex flex-row">
        <label
          htmlFor="forgetPassword"
          className="text-sm flex justify-center h-5 items-center"
        >
          Forgot Password?
        </label>
        <button
          className="btn btn-link btn-xs h-5 text-sm"
          onClick={() => signupPageRedirect('signup')}
        >
          Haven't Account?
        </button>
      </div>

      <input type="checkbox" id="forgetPassword" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="forgetPassword"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Reset Password!</h3>
          <form onSubmit={forgetPasswordHandler}>
            <div className="w-max mx-auto">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group w-auto">
                <span>Email</span>
                <input
                  type="text"
                  ref={emailRef}
                  placeholder="Your email address"
                  className="input input-bordered"
                />
              </label>
            </div>
            <button
              className="btn btn-wide w-64 mx-auto btn-sm mt-6"
              value="submit"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
