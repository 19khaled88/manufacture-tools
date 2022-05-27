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
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <th>{order.name}</th>
                <td>{order.address}</td>
                <td>{order.order}</td>
                <td>{order.phone}</td>
                <td>{order.product}</td>
                <td>{order.price}</td>
                {order.pay === 'not paid' ? (
                  <td className=" rounded-md my-3 text-center btn-sm bg-amber-400 flex  items-center">
                    <button className="mx-auto ">Pay</button>
                  </td>
                ) : (
                  <td className="rounded-md my-3 text-center btn-sm bg-emerald-400 flex  items-center">
                    <button className="mx-auto" disabled>
                      Paid
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
