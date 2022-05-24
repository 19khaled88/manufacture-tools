import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
const Purchase = () => {
  const price = useRef('')
  const { state } = useLocation()
  const [error, setError] =useState('')
  const orderPlaceHandler=(e)=>{
      e.preventDefault()
      const order = price.current.value
      
  }
  const onChangeHandler=(e)=>{
    if(e.target.value > parseInt(state?.stock)){
      const color = document.getElementsByClassName('orderField')[0]
      const button = document.getElementsByClassName('buyButton')[0]
      button.disabled = true;
      color.style.borderColor ='red'
      setError('Order must not exceed the given value')
    }else if(e.target.value < parseInt(state?.min)){
      const color = document.getElementsByClassName('orderField')[0]
      const button = document.getElementsByClassName('buyButton')[0]
      button.disabled = true;
      color.style.borderColor ='red'
      setError('Order must not be below the given value')
    } else if(e.target.value >= parseInt(state?.min) && e.target.value <= parseInt(state?.stock)){
      const color = document.getElementsByClassName('orderField')[0]
      const button = document.getElementsByClassName('buyButton')[0]
      setError('')
      button.disabled = false;
      color.style.borderColor ='white'
    }
  }
  return (
    <div >
      <p className='text-2xl'>Purchase Page</p>
     <div className='text-left container px-2 mx-auto'>
      <p><span style={{width:'200px',display:'inline-block'}} className='text-lg'>Product_name</span>: <span className='text-yellow-600 '>{state?.name}</span></p>
      <p><span style={{width:'200px',display:'inline-block'}} className='text-lg'>Minimun_Order</span>: <span className='text-yellow-600 '>{state?.min}</span></p>
      <p><span style={{width:'200px',display:'inline-block'}} className='text-lg '>Product_in_stock</span>: <span className='text-yellow-600 '>{state?.stock}</span></p>
      <p><span style={{width:'200px',display:'inline-block'}} className='text-lg'>Product_description</span>: <span className='text-yellow-600 '>{state?.desc}</span></p>
      <p><span style={{width:'200px',display:'inline-block'}} className='text-lg'>Product_price</span>: <span className='text-yellow-600 '>{state?.price}</span></p>
     </div>

     <div className="flex justify-center w-1/3 items-center mx-auto">
        <form className='w-full' onSubmit={orderPlaceHandler}>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Place Order</h2>
                <div className='flex flex-row'>
                  <label className='w-1/3 text-left'>Product Name :</label>
                  <input className='w-2/3 input input-bordered input-sm input-warning w-full max-w-xs' type="text" placeholder="Type here" value={state?.name} disabled/>
                </div> 
                <div className='flex flex-row'>
                  <label className='w-1/3 text-left'>Product Price :</label>
                  <input type="number" placeholder="Type here" value={state?.price} disabled className='w-2/3 input input-bordered input-sm input-warning w-full max-w-xs' />
                </div> 
                <div className='flex flex-row'>
                  <label className='w-1/3 text-left'>Minimum Order :</label>
                  <input 
                  ref={price} 
                  className='w-2/3 input input-bordered input-warning input-sm  w-full max-w-xs orderField ' 
                  type="number" 
                  onChange={onChangeHandler}
                  placeholder={state?.min} defaultValue={state?.min}/>
                </div>
                  <span className='text-red-600'>
                     {error  ?'Error:'+ error : ''}
                  </span>
                  <div className="card-actions justify-end pt-8">
                    <button className="btn bg-blue-500 btn-sm buyButton">Buy Now</button>
                  </div>
              </div>
            </div>
        </form>
     </div>
    </div>
  )
}

export default Purchase
