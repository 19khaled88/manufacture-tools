import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import Tool from './Tool'
const Tools = () => {
  const [tools, setTools] = useState([])
  const navigate = useNavigate()
 

  const { data: products, isLoading } = useQuery('products', () =>
    fetch('http://localhost:4000/product').then((res) => res.json()),
  )
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <>
      <div className="flex flex-col">
        <p className="text-3xl pt-16 mb-10">Bicycle Tools</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-4 px-2 mx-auto">
          {products.map((product) => (
            <Tool key={product._key} product={product}></Tool>
          ))}
        </div>
      </div>
    </>
  )
}

export default Tools
