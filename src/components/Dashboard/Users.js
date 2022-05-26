import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import User from './User'

const Users = () => {
  const { data: users, isLoading } = useQuery('users', () =>
    fetch('http://localhost:4000/users', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('webToken')}`,
      },
    }).then((res) => res.json()),
  )
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className="text-2xl">
      <p className="text-2xl">Total Users:{users.length}</p>
      {/* {users.map((user, index) => (
        <User user={user} index={index}></User>
      ))} */}
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Address</th>
              <th>User Status</th>
              <th>User Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  {' '}
                  <button class="btn btn-active btn-sm btn-accent">
                    Make Admin
                  </button>
                </td>
                <td>
                  {' '}
                  <button class="btn btn-active btn-sm btn-warning">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
