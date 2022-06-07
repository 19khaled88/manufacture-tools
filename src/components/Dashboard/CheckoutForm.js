import React, { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
const CheckoutForm = ({ id, email, product, price }) => {
  const [clientSecret, setClientSecret] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price: price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [price])
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card == null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })
    setError(error?.message || '')

    const {
      paymentIntent,
      error: intentError,
    } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: email,
        },
      },
    })
    if (intentError) {
      setError(intentError?.message)
      setSuccess('')
    } else {
      fetch(`http://localhost:5000/confirmPayment/${id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
      setTransactionId(paymentIntent.id)
      setError('')
      setSuccess('Your payment is completed')
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className="card-actions justify-end mt-6 container">
          <button
            className="btn btn-primary btn-sm"
            type="submit"
            value="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-red-500">{error ? error : ''}</p>
      <div className="flex flex-col">
        <p className="text-green-500 text-left">
          <span className="text-black">Successful :</span>
          {success ? success : ''}
        </p>
        <p className="text-red-500 text-left">
          <span className="text-black">TnsId: </span>
          {transactionId ? transactionId : ''}
        </p>
      </div>
    </>
  )
}

export default CheckoutForm
