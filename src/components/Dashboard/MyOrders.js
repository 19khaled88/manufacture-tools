import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../DB/firebase.init'
const MyOrders = () => {
  const [orders, setOrders] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:4000/order?user=${user?.email}`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('webToken')}`,
        },
      })
        .then((res) => {
          if (res.status === 401) {
            navigate('/home')
          } else if (res.status === 403) {
            navigate('/home')
          }
          return res.json()
        })
        .then((data) => {
          setOrders(data)
          console.log(data)
        })
    }
  }, [user])

  return (
    <div>
      <p className="text-2xl"> MyOrders</p>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Order</th>
              <th>Phone</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <th>{order.name}</th>
                <td>{order.address}</td>
                <td>{order.order}</td>
                <td>{order.phone}</td>
                <td>{order.product}</td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders
