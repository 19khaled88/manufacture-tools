import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Loading from '../Shared/Loading'
import User from './User'

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () =>
    fetch('https://evening-wildwood-96784.herokuapp.com/users', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('webToken')}`,
      },
    }).then((res) => res.json()),
  )
  if (isLoading) {
    return <Loading></Loading>
  }

  const makeAdminHandler = (email) => {
    fetch(`https://evening-wildwood-96784.herokuapp.com/admin/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('webToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          refetch()
        }
        if (res.status === 403) {
          toast.error('Admin make failed')
        }
        return res.json()
      })
      .then((data) => {
        console.log(data)
        if (data.modifiedCount > 0) {
          refetch()
          toast('New Admin made')
        }
      })
  }
  return (
    <div>
      <p className="text-2xl">Total Users:{users.length}</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Address</th>
              <th>User Status</th>
              <th>User Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.message !== 'Forbidden access' ? (
              users.map((user, index) => (
                <tr key={index}>
                  <th className="py-1">{index + 1}</th>
                  <td className="py-1">{user.email}</td>
                  <td className="py-1">
                    {user.role === 'admin' ? (
                      'Admin'
                    ) : (
                      <button
                        onClick={() => makeAdminHandler(user.email)}
                        className="btn btn-active btn-sm btn-accent"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td className="py-1">
                    {user.role === 'admin' ? (
                      <button
                        disabled
                        className="btn btn-active btn-sm bg-red-400 border-0"
                      >
                        Delete
                      </button>
                    ) : (
                      <button className="btn btn-active btn-sm bg-red-400 border-0">
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <p className="text-center text-lg text-rose-600">
                Happened wrong! Please login again
              </p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
