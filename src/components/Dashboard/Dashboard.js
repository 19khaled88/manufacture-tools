import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <p>Dahsbaord</p>
      <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    
  <Outlet></Outlet>

  <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
     
      <li><Link to="/dashboard">My Profile</Link></li>
      <li ><Link to="/dashboard/myorders">My Orders</Link></li>
      <li><Link to="/dashboard/myreview">Add A Review</Link></li>
      <li><Link to="/dashboard/addproduct">Add product</Link></li>
    </ul>
  
  </div>
</div>
    </div>
  );
}

export default Dashboard;
