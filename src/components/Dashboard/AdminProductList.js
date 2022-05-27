import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminProductList = ({ products, handler }) => {
  const navigate = useNavigate()
  // const handler = ({ action, id }) => {
  //     if (action === 'remove') {
  //       fetch(`http://localhost:5000/deleteProduct/${id}`, {
  //         method: 'DELETE',
  //         headers: {
  //           authorization: `Bearer ${localStorage.getItem('webToken')}`,
  //         },
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data)
  //           refetch()
  //         })
  //     } else if (action === 'update') {

  //     }
  //   }
  const productUpdateHandler = (id, name, price, stock, min_order) => {
    navigate('/adminProductUpdate', {
      state: {
        id: id,
        name: name,
        price: price,
        stock: stock,
        min_order: min_order,
      },
    })
  }
  return (
    <>
      {products.map((product, index) => (
        <tr key={index}>
          <th>{product.product_name}</th>
          <td>{product.product_price}</td>
          <td>{product.product_stock}</td>
          <td>{product.product_min_order}</td>
          <td>
            <button
              onClick={() => handler({ action: 'remove', id: product._id })}
              class="btn-warning btn btn-sm"
            >
              Delete
            </button>
          </td>
          <td>
            <button
              class="btn-accent btn btn-sm modal-button"
              onClick={() =>
                productUpdateHandler(
                  product._id,
                  product.product_name,
                  product.product_price,
                  product.product_stock,
                  product.product_min_order,
                )
              }
            >
              Update
            </button>
          </td>
        </tr>
      ))}
    </>
  )
}

export default AdminProductList
