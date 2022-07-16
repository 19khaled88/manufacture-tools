import React from 'react'
import { useNavigate } from 'react-router-dom'
const Tool = ({ product, index }) => {
  const navigate = useNavigate()
  const purchaseHandler = ({ price, min, name, stock, desc, id }) => {
    navigate('/purchase', {
      state: {
        name: name,
        price: price,
        min: min,
        stock: stock,
        desc: desc,
        id: id,
      },
    })
  }
  const {
    product_name,
    product_desc,
    product_price,
    product_stock,
    product_min_order,
    product_image,
    _id,
  } = product
  return (
    <>
      <div className="card lg:max-w-md bg-base-100 shadow-xl">
        <figure>
          <img
            className="lg:w-full lg:h-56 h-80 w-full"
            src={product_image}
            alt={product_image}
          />
        </figure>
        <div className="card-body pt-2 pb-4">
          <h2 className="card-title">{product_name}</h2>
          <p className="text-justify">{product_desc}</p>
          <div className="flex flex-row justify-between">
            <div className="flex-1 card-actions justify-start">
              <div className="badge badge-outline w-28">
                Price :
                <span className="text-cyan-500 text-lg py-0">
                  {product_price}
                </span>
              </div>
            </div>
            <div className="flex-2 card-actions justify-end">
              <div className="badge badge-outline">
                Stock :
                <span className="text-rose-500 text-lg">{product_stock}</span>
              </div>
              <div className="badge badge-outline">
                Min Order :
                <span className="text-rose-500 text-lg">
                  {product_min_order}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-1 flex  justify-end">
            <button
              className="btn btn-sm btn-accent w-1/3"
              onClick={() =>
                purchaseHandler({
                  name: product_name,
                  price: product_price,
                  min: product_min_order,
                  stock: product_stock,
                  desc: product_desc,
                  id: _id,
                })
              }
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tool
