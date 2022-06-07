import React, { useEffect, useState } from 'react'

const ManageOrder = ({ manage, refetch }) => {
  const [order, setOrder] = useState('')
  const productDeleteHandler = (id, order, name) => {
    fetch(
      `https://evening-wildwood-96784.herokuapp.com/deleteSoldProduct/${id}`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ product_stock: order, product_name: name }),
      },
    )
      .then((res) => {
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
              onClick={() =>
                productDeleteHandler(manage._id, manage.order, manage.product)
              }
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
