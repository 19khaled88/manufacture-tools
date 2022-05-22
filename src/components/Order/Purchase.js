import React from 'react'
import { useLocation } from 'react-router-dom'
const Purchase = () => {
  const { state } = useLocation()

  return (
    <div>
      <p>Purchase Page</p>
      <p>Price:{state?.price}</p>
      <p>Min value:{state?.min}</p>
    </div>
  )
}

export default Purchase
