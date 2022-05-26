import React, { useEffect, useRef, useState } from 'react'
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth'
import auth from '../DB/firebase.init'
const MyProfile = () => {
  const [profileData, setProfileData] = useState('')
  const [user] = useAuthState(auth)
  const education = useRef('')
  const location = useRef('')
  const phone = useRef('')
  const linkedin = useRef('')
  const { displayName, email } = user
  const updateProfileHandler = () => {
    const eduRef = education.current.value
    const locRef = location.current.value
    const phoRef = phone.current.value
    const linRef = linkedin.current.value
    const email = user?.email
    const value = { eduRef, locRef, phoRef, linRef, email }
    fetch('http://localhost:5000/updateProfile', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(value),
    }).then((res) => res.json())
    // .then((data) => setProfileData(data))
  }
  useEffect(() => {
    fetch(`http://localhost:5000/updateProfile/${user?.email}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setProfileData(data))
  }, [user?.email])
  const { eduRef, linRef, locRef, phoRef } = profileData
  return (
    <div>
      <p className="text-2xl">My Profiles</p>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{displayName}</td>
                  <td>{email}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th>Education</th>
                  <th>Location</th>
                  <th>Phone</th>
                  <th>LinkedIn</th>
                </tr>
              </thead>
              <tbody>
                {profileData ? (
                  <tr>
                    <td>{eduRef}</td>
                    <td>{locRef}</td>
                    <td>{phoRef}</td>
                    <td>{linRef}</td>
                  </tr>
                ) : (
                  ''
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col justify-center mx-auto px-2">
          <p>Update profile</p>
          <form onSubmit={updateProfileHandler}>
            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <input
                  ref={education}
                  type="text"
                  placeholder="Your Education"
                  class="input input-bordered input-primary w-full max-w-xs"
                />
                <input
                  ref={location}
                  type="text"
                  placeholder="Phone Number"
                  class="input input-bordered input-primary w-full max-w-xs"
                />
                <input
                  ref={phone}
                  type="tel"
                  placeholder="Location"
                  class="input input-bordered input-primary w-full max-w-xs"
                />
                <input
                  ref={linkedin}
                  type="text"
                  placeholder="LinkedIn Profile"
                  class="input input-bordered input-primary w-full max-w-xs"
                />
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
