import React, { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AdminProductUpdate = () => {
  const pName = useRef('')
  const pPrice = useRef('')
  const pStock = useRef('')
  const pMin_order = useRef('')
  const location = useLocation()
  const { id, name, price, stock, min_order } = location.state
  const navigate = useNavigate()
  const updatehandler = (e) => {
    e.preventDefault()
    const data = {
      product_name: pName.current.value,
      product_price: pPrice.current.value,
      product_stock: pStock.current.value,
      product_min_order: pMin_order.current.value,
    }
    fetch(`https://evening-wildwood-96784.herokuapp.com/updateProduct/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          navigate('/dashboard/manageProduct')
        }
      })
  }
  return (
    <div className="container flex mx-auto px-2 pt-16 justify-center">
      <div style={{ width: '400px' }} className="card bg-base-100 shadow-xl">
        <form onSubmit={updatehandler}>
          <div className="card-body">
            <h2 className="card-title mx-auto pb-6">Update Product</h2>
            <div className="flex flex-row">
              <label className="w-2/3 text-left">Product Name:</label>
              <input
                ref={pName}
                type="text"
                defaultValue={name}
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div className="flex flex-row">
              <label className="w-2/3 text-left">Product Price:</label>
              <input
                ref={pPrice}
                type="text"
                defaultValue={price}
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div className="flex flex-row ">
              <label className="w-2/3 text-left">Product Stock:</label>
              <input
                ref={pStock}
                defaultValue={stock}
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div className="flex flex-row">
              <label className="w-2/3 text-left">Minimum order:</label>
              <input
                ref={pMin_order}
                defaultValue={min_order}
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div className="card-actions justify-end">
              <button
                className=" px-3 py-1 rounded-md  bg-teal-500"
                type="submit"
                value="submit"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminProductUpdate
