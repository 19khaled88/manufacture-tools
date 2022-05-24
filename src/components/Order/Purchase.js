import React, { useRef, useState } from 'react'
import {
  useAuthState
} from 'react-firebase-hooks/auth'
import { useLocation } from 'react-router-dom'
import auth from '../DB/firebase.init'
const Purchase = () => {
  const [loginUser] = useAuthState(auth)
  const [info, setInfo] = useState('')
  const order = useRef('')
  const phone = useRef('')
  const add = useRef('')
  const { state } = useLocation()
  
  const [total, setTotal] = useState(parseInt(state?.price) * parseInt(state?.min))
  const [error, setError] =useState('')
  console.log(typeof(total))
  const orderPlaceHandler=(e)=>{
      e.preventDefault()
      const ordered = order.current.value
      const price = total
      const phoneNmber = phone.current.value
      const address = add.current.value
      const mail = loginUser?.email
      const value = {ordered, price,mail, phoneNmber,address}
      fetch('http://localhost:4000/placceOrder',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(value)
      })
       .then(res=>res.json())
       .then(data=>console.log(data))
       .catch(error=>console.log(error))
      
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
      setTotal(parseInt(state?.price) * e.target.value)
      setError('')
      button.disabled = false;
      color.style.borderColor ='white'
    }
  }
  return (
    <div >
      <p className='text-2xl'>Purchase Page</p>
      <div className='flex flex-row container px-4 mx-auto'>
        <div className='text-left container px-2 mx-auto'>
          <p className='flex justify-center text-lg'>Product Details</p>
          <p><span style={{width:'200px',display:'inline-block'}} className='text-lg'>Product_name</span>: <span className='text-yellow-600 '>{state?.name}</span></p>
          <p><span style={{width:'200px',display:'inline-block'}} className='text-lg'>Minimun_Order</span>: <span className='text-yellow-600 '>{state?.min}</span></p>
          <p><span style={{width:'200px',display:'inline-block'}} className='text-lg '>Product_in_stock</span>: <span className='text-yellow-600 '>{state?.stock}</span></p>
          <p><span style={{width:'200px',display:'inline-block'}} className='text-lg'>Product_description</span>: <span className='text-yellow-600 '>{(state?.desc)?.length > 90 ? (state?.desc).slice(0,90)+' ...' : state?.desc}</span></p>
          <p><span style={{width:'200px',display:'inline-block'}} className='text-lg'>Product_price</span>: <span className='text-yellow-600 '>{state?.price}</span></p>
          <p><span style={{width:'200px',display:'inline-block'}} className='text-lg'>Total_price</span>: <span className='text-yellow-600 '>{isNaN(total) || total === '' ? '': total}</span></p>
        </div>
        <div>
          <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{loginUser?.displayName? loginUser?.displayName:''}</td>
                <td>{loginUser?.email? loginUser?.email:''}</td>
              </tr> 
            </tbody>
            </table>
          </div>
        </div>
      </div>

     <div className="flex justify-center w-1/3 items-center mx-auto">
        <form  className='w-full' onSubmit={orderPlaceHandler}>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Place Order</h2>
                <div className='flex flex-row'>
                  <label className='w-1/3 text-left'>Product Name :</label>
                  <input 
                    className='w-2/3 input input-bordered input-sm input-warning w-full max-w-xs' 
                    type="text" 
                    placeholder="Type here" 
                    value={state?.name} disabled/>
                </div> 
                <div className='flex flex-row'>
                  <label className='w-1/3 text-left'>Product Price :</label>
                  <input 
                    type="number" 
                    placeholder="Type here" 
                    value={state?.price} disabled 
                    className='w-2/3 input input-bordered input-sm input-warning w-full max-w-xs' />
                </div> 
                <div className='flex flex-row'>
                  <label className='w-1/3 text-left'>Minimum Order :</label>
                  <input 
                    ref={order} 
                    className='w-2/3 input input-bordered input-warning input-sm  w-full max-w-xs orderField ' 
                    type="number" 
                    onChange={onChangeHandler}
                    placeholder={state?.min} defaultValue={state?.min}/>
                </div>
                <div className='flex flex-row'>
                  <label className='w-1/3 text-left'>Phone :</label>
                  <input 
                    ref={phone} 
                    className='w-2/3 input input-bordered input-warning input-sm  w-full max-w-xs orderField ' 
                    type="tel" 
                   
                    placeholder="Your phone Number"/>
                </div>
                <div className='flex flex-row'>
                  <label className='w-1/3 text-left'>Address :</label>
                  <input 
                    ref={add} 
                    className='w-2/3 input input-bordered input-warning input-sm  w-full max-w-xs orderField ' 
                    type="text" 
                   
                    placeholder="Your Address"/>
                </div>
                  <span className='text-red-600'>
                     {error  ?'Error:'+ error : ''}
                  </span>
                  <div className="card-actions justify-end pt-8">
                    <button class="btn  bg-blue-500 btn-sm buyButton">Buy Now</button>
                    
                  </div>
              </div>
            </div>
        </form>
     </div>   
    </div>
  )
}

export default Purchase
