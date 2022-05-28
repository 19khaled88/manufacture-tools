import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Loading from '../Shared/Loading'
const AddProduct = () => {
  const [productLoading, setProductLoading] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()
  const onSubmit = async (data) => {
    setProductLoading(true)
    const image = data.pImage[0]
    const formData = new FormData()
    formData.append('image', image)
    const imageStorageKey = '7b0fcfd2e21a33f0cdf5cbec99da15f3'

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    await fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const url = result.data.url
          const product = {
            product_name: data.pName,
            product_desc: data.pDesc,
            product_price: data.pPrice,
            product_stock: data.pStock,
            product_min_order: data.pMinOrder,
            product_image: url,
          }

          fetch('https://enigmatic-ravine-64460.herokuapp.com/product', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                setProductLoading(false)
                toast.success('Hurry! Product add successfully')
                reset()
              } else {
                toast.error('Sorry! Failed to add the product')
              }
            })
        }
        // console.log('imgbb', data)
      })
  }
  const pName = useRef('')
  const pDesc = useRef('')
  const pPrice = useRef('')
  const pStock = useRef('')
  const pMinOrder = useRef('')
  const pImage = useRef('')
  // const productInsertHandler=(e)=>{
  //     e.preventDefault()
  //     const proudct_Name = pName.current.value
  //     const proudct_Desc = pDesc.current.value
  //     const proudct_Price = pPrice.current.value
  //     const proudct_Stock = pStock.current.value
  //     const proudct_MinOrder = pMinOrder.current.value
  //     const proudct_Image = pImage.current.value
  //     const items ={proudct_Name,proudct_Desc,proudct_Price,proudct_Stock,proudct_MinOrder,proudct_Image}

  //     // console.log(items)
  // }

  return (
    <>
      <p className="text-2xl">Product Add Page</p>
      <div className="card w-2/4 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mx-auto">Add Product</h2>
          {productLoading === true ? <Loading /> : ''}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mx-auto"
          >
            <label className="label pb-0">
              <span className="label-text">Product Name:</span>
            </label>
            <input
              ref={pName}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary input-sm w-full max-w-xs"
              {...register('pName', {
                required: {
                  value: true,
                  message: 'Product name required',
                },
              })}
            />
            {errors.pName?.type === 'required' && (
              <span className="label-text-alt text-red-400">
                {errors.pName.message}
              </span>
            )}

            <label className="label pb-0 pt-1">
              <span className="label-text">Description:</span>
            </label>
            <textarea
              ref={pDesc}
              className="textarea textarea-primary w-full max-w-xs"
              placeholder="Bio"
              {...register('pDesc', {
                required: {
                  value: true,
                  message: 'Product description required',
                },
              })}
            />
            {errors.pDesc?.type === 'required' && (
              <span className="label-text-alt text-red-400">
                {errors.pDesc.message}
              </span>
            )}

            <label className="label pb-0 pt-1">
              <span className="label-text">Price:</span>
            </label>
            <input
              ref={pPrice}
              type="number"
              placeholder="Type here"
              className="input input-bordered input-primary input-sm w-full max-w-xs"
              {...register('pPrice', {
                required: {
                  value: true,
                  message: 'Product price required',
                },
              })}
            />
            {errors.pPrice?.type === 'required' && (
              <span className="label-text-alt text-red-400">
                {errors.pPrice.message}
              </span>
            )}

            <label className="label pb-0 pt-1">
              <span className="label-text">Stock</span>
            </label>
            <input
              ref={pStock}
              type="number"
              placeholder="Type here"
              className="input input-bordered input-primary input-sm w-full max-w-xs"
              {...register('pStock', {
                required: {
                  value: true,
                  message: 'Product Stock value required',
                },
              })}
            />
            {errors.pStock?.type === 'required' && (
              <span className="label-text-alt text-red-400">
                {errors.pStock.message}
              </span>
            )}

            <label className="label pb-0 pt-1">
              <span className="label-text">Minimum Order:</span>
            </label>
            <input
              ref={pMinOrder}
              type="number"
              placeholder="Type here"
              className="input input-bordered input-primary input-sm w-full max-w-xs"
              {...register('pMinOrder', {
                required: {
                  value: true,
                  message: 'Product Minimum order required',
                },
              })}
            />
            {errors.pMinOrder?.type === 'required' && (
              <span className="label-text-alt text-red-400">
                {errors.pMinOrder.message}
              </span>
            )}

            <label className="label pb-0 pt-1">
              <span className="label-text">Image</span>
            </label>
            <input
              ref={pImage}
              type="file"
              placeholder="Type here"
              className="input input-bordered input-primary input-sm w-full max-w-xs"
              {...register('pImage', {
                required: {
                  value: true,
                  message: 'Product Image required',
                },
              })}
            />
            {errors.pImage?.type === 'required' && (
              <span className="label-text-alt text-red-400">
                {errors.pImage.message}
              </span>
            )}

            <div className="card-actions justify-end pt-6">
              <button
                value="submit"
                type="submit"
                className="btn btn-sm btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddProduct
