import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import ManageOrder from './ManageOrder'

const ManageOrders = () => {
  // const [manageOrders, setManageOrder] = useState([])
  const [deleteSuccess, setDeleteSuccess] = useState('')

  const { data: manageOrders, isLoading, refetch } = useQuery(
    'manageOrders',
    () =>
      fetch('http://localhost:5000/manageorders', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('webToken')}`,
        },
      }).then((res) => res.json()),
  )
  if (isLoading) {
    return <Loading></Loading>
  }

  const successCount = (input) => {
    if (input.deletedCount === 1) {
      refetch()
    }
  }

  // useEffect(() => {
  //   fetch('http://localhost:5000/manageorders')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setManageOrder(data)
  //     })
  // }, [deleteSuccess])

  return (
    <div>
      <p className="text-2xl">Manage Orders : {manageOrders?.length}</p>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Order</th>
              <th>Phone</th>
              <th>Product</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {manageOrders.map((manageOrder, index) => (
              <ManageOrder
                refetch={successCount}
                key={index}
                manage={manageOrder}
              ></ManageOrder>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageOrders
