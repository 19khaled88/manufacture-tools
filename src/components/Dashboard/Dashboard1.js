import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import useAdmin from '../CustorHook/useAdmin'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../DB/firebase.init'
const Dashboard1 = () => {
  const [user] = useAuthState(auth)

  const [admin] = useAdmin(user)

  return (
    <div>
      <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar  bg-base-300">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-1">Dashboard</div>
          </div>
          <div className="px-8 content-center flex flex-col lg:hidden">
            <Outlet></Outlet>
          </div>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay lg:hidden"></label>
          <ul class="menu p-4 lg:hidden w-64 bg-base-100">
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>
            {!admin && (
              <li>
                <Link to="/dashboard/myreview">Add A Review</Link>
              </li>
            )}

            {admin && (
              <li>
                <Link to="/dashboard/addproduct">Add product</Link>
              </li>
            )}

            {admin && (
              <li>
                <Link to="/dashboard/manageOrder">Manage Orders</Link>
              </li>
            )}

            {admin && (
              <li>
                <Link to="/dashboard/users">Users</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="/dashboard/manageProduct">Manage Product</Link>
              </li>
            )}
          </ul>
          <div
            style={{ overflow: 'auto' }}
            class="container mx-auto hidden lg:flex lg:flex-row w-full pt-20 lg:inline"
          >
            <div className="w-72">
              <ul class="menu flex  flex-col">
                <li className="border-2">
                  <Link to="/dashboard">My Profile</Link>
                </li>
                <li className="border-2">
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
                {!admin && (
                  <li className="border-2">
                    <Link to="/dashboard/myreview">Add A Review</Link>
                  </li>
                )}

                {admin && (
                  <li className="border-2">
                    <Link to="/dashboard/addproduct">Add product</Link>
                  </li>
                )}
                {admin && (
                  <li className="border-2">
                    <Link to="/dashboard/manageOrder">Manage Orders</Link>
                  </li>
                )}
                {admin && (
                  <li className="border-2">
                    <Link to="/dashboard/users">Users</Link>
                  </li>
                )}
                {admin && (
                  <li className="border-2">
                    <Link to="/dashboard/manageProduct">Manage Product</Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="px-8 border-2 w-full hidden lg:inline">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard1
