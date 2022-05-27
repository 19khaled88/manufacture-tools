import React, { useEffect, useState } from 'react'

const ManageOrder = ({ manage, refetch }) => {
  const [order, setOrder] = useState('')
  const productDeleteHandler = (id) => {
    fetch(`http://localhost:5000/deleteSoldProduct/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((data) => refetch(data))
  }

  return (
    <>
      <tr>
        <th className="py-2">{manage.name}</th>
        <td className="py-2">{manage.address}</td>
        <td className="py-2">{manage.order}</td>
        <td className="py-2">{manage.phone}</td>
        <td className="py-2">{manage.product}</td>
        <td className="py-2">{manage.price}</td>
        <td className="py-2">{manage.pay}</td>
        {manage.pay === 'not paid' ? (
          <td className="py-2">
            <button
              onClick={() => productDeleteHandler(manage._id)}
              className="btn btn-sm btn-warning"
            >
              Delete
            </button>
          </td>
        ) : (
          <td className="py-2">
            <button className="btn btn-sm" disabled>
              Delete
            </button>
          </td>
        )}
      </tr>
    </>
  )
}

export default ManageOrder
