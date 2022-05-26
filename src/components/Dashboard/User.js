import React from 'react'

const User = ({user, index}) => {
  return (
    <div>
      <p>User</p>
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
              <tr>
                  <td>{index + 1}</td>
              </tr>
            {/* {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User
