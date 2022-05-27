import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import UpdateProduct from './UpdateProduct'

const ManageProduct = () => {
  const { data: products, isLoading, refetch } = useQuery('products', () =>
    fetch('http://localhost:5000/allProduct', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('webToken')}`,
      },
    }).then((res) => res.json()),
  )
  if (isLoading) {
    return <Loading></Loading>
  }
  const handler = ({ action, id }) => {
    if (action === 'remove') {
      fetch(`http://localhost:5000/deleteProduct/${id}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('webToken')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          refetch()
        })
    } else if (action === 'update') {
      
    }
  }

  return (
    <>
      <div className="text-2xl">ManageProduct</div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Minimum Order</th>
              <th>Remove</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <th>{product.product_name}</th>
                <td>{product.product_price}</td>
                <td>{product.product_stock}</td>
                <td>{product.product_min_order}</td>
                <td>
                  <button
                    onClick={() =>
                      handler({ action: 'remove', id: product._id })
                    }
                    class="btn-warning btn btn-sm"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      handler({ action: 'update', id: product._id })
                    }
                    class="btn-accent btn btn-sm"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ManageProduct
