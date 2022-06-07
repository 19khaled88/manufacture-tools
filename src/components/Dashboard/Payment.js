import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import {useLocation} from 'react-router-dom'
import CheckoutForm from './CheckoutForm'
const stripePromise = loadStripe('pk_test_8YjljN3WdgKzW5b1vZPMLtW0');
const Payment = () => {
    const location = useLocation()
  return (<div className='flex flex-col justify-center mx-auto'>
  <div>
   <div class="card w-96 bg-base-100 shadow-xl mx-auto pb-6">
   <div class="card-body">
       <h2 class="card-title mx-auto ">Detail</h2>
       <p className='text-left'>Your Email: {location.state.email}</p>
       <p className='text-left'>you ordered for {location.state.product}</p>
       <p className='text-left'>Total Price: {location.state.price}</p>
       <p className='text-right'>Thank you for keeping with us</p>
       </div>
       </div>
  </div>
   <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-6">
       <div class="card-body">
           <h2 class="card-title mx-auto">Card Payment</h2>
           <Elements stripe={stripePromise} >
               <CheckoutForm email={location.state.email} id={location.state.id} product={location.state.product} price={location.state.price}/>
           </Elements>
          
       </div>
   </div>
</div>)
}

export default Payment
