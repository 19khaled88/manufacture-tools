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
      fetch(`http://localhost:5000/order?user=${user?.email}`, {
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
        })
    }
  }, [user])
  const cancelHandler = (id) => {
    console.log(id)
  }
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
              <th>Payment</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <th className="py-1">{order.name}</th>
                <td className="py-1">{order.address}</td>
                <td className="py-1">{order.order}</td>
                <td className="py-1">{order.phone}</td>
                <td className="py-1">{order.product}</td>
                <td className="py-1">{order.price}</td>
                {order.pay === 'not paid' ? (
                  <td className="py-1">
                    <button className="btn btn-sm bg-amber-400 ">Pay</button>
                  </td>
                ) : (
                  <td className="py-1">
                    <button className=" btn btn-sm bg-emerald-400" disabled>
                      Paid and Shipping pending
                    </button>
                  </td>
                )}
                {order.pay === 'not paid' ? (
                  <td className="py-1">
                    <button
                      className="btn btn-sm btn-warning 1"
                      onClick={() => cancelHandler(order._id)}
                    >
                      Cancel
                    </button>
                  </td>
                ) : (
                  <td className="py-1">
                    <button
                      disabled
                      className="btn btn-sm btn-warning 1"
                      onClick={() => cancelHandler(order._id)}
                    >
                      Cancel
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders
