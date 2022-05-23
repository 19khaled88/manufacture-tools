import React, { useRef, useState } from 'react'
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from '../Shared/Loading.js'
import auth from '../DB/firebase.init'

const Signup = ({ loginPageRedirect }) => {
  const [signUpError, setSignUpError] = useState('')
  const [signUpLoading, setSignUpLoading] = useState('')
  const [signupName, setSignUpName] = useState('')
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth)
  const navigate = useNavigate()
  const emailRef = useRef('')
  // const [signUpLoading, setSignUpLoading] = useState('')
  const [singUpUser] = useAuthState(auth)
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
    if (data.password === data.c_password) {
      const email = data.email
      const password = data.password
      await createUserWithEmailAndPassword(email, password)
      await updateProfile({ displayName: data.name })
      toast('User Created and Profile updated!')
    } else {
      setSignUpError('password not match')
    }
  }
  let wrongSignIn
  if (error || updatingError) {
    wrongSignIn = error.message
    // return (
    //   <div>
    //     <p>Error: {error.message}</p>
    //   </div>
    // );
  }
  if (loading || updating) {
    // setSignUpLoading('Please wait...')
    return <Loading />
    // return (<p>Loading...</p>)
  }
  if (user) {
    navigate('/')
    // return (
    //   <div>
    //     <p>Registered User:</p>
    //     <p>{singUpUser.email}</p>
    //   </div>
    // );
  }
  const forgetPasswordHandler = () => {}
  return (
    <>
      <h4 className="cart-title">Sign Up page</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label p-0">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered input-sm w-full input-xs max-w-xs"
            {...register('name', {
              required: {
                value: true,
                message: 'Name is required',
              },
            })}
          />
          <label className="label pt-0 pb-1">
            {errors.name?.type === 'required' && (
              <span className="label-text-alt text-red-400">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label p-0">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered input-sm input-xs w-full max-w-xs"
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
            className="input input-bordered input-sm input-xs w-full max-w-xs"
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

        <div className="form-control w-full max-w-xs">
          <label className="label p-0">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Your Confirm Password"
            className="input input-bordered input-sm input-xs w-full max-w-xs"
            {...register('c_password', {
              required: {
                value: true,
                message: 'Confirm Password is required',
              },
              minLength: { value: 6, message: 'Minimun length is 6' },
            })}
          />
          <label className="label pt-0 pb-1">
            {errors.c_password?.type === 'required' && (
              <span className="label-text-alt  text-red-400">
                {errors.c_password.message}
              </span>
            )}
            {errors.c_password?.type === 'minLength' && (
              <span className="label-text-alt text-red-400">
                {errors.c_password.message}
              </span>
            )}
          </label>
        </div>
        <div className="flex flex-col">
          <span className="text-red-400">
            {' '}
            {signUpError ? 'Error:' + signUpError : ''}
          </span>
          <span className="text-red-400">
            {' '}
            {signUpLoading ? 'Loading:' + signUpLoading : ''}
            {wrongSignIn ? wrongSignIn : ''}
          </span>
          <button
            className="btn btn-wide btn-xs mt-2"
            value="login"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex flex-row">
        <label
          htmlFor="forgetPassword"
          className="text-sm h-5"
          onClick={() => forgetPasswordHandler()}
        >
          Forgot Password?
        </label>
        <button
          className="btn btn-link h-5 btn-xs text-sm"
          onClick={() => loginPageRedirect('login')}
        >
          Have Account?
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

export default Signup
