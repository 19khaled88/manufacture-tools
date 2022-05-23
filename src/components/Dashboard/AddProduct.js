import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) =>{
        console.log(data)
        // const formData = new FormData();
        // formData.append('image', )
        // const imageStorageKey = '7b0fcfd2e21a33f0cdf5cbec99da15f3';
    
        // const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        // fetch(url, {
        //     method: 'POST',
        //     body:formData
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log('imgbb',data)
        // })
    };
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
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

                <label class="label pb-0">
                    <span class="label-text">Product Name:</span>
                </label>
                <input
                 ref={pName} 
                 type="text" 
                 placeholder="Type here" 
                 class="input input-bordered input-primary w-full max-w-xs"
                 {...register("pName", { required:{
                    value:true,
                    message: 'Product name required'
                } })}
                 />
                 {errors.pName?.type === 'required' && (
                    <span className="label-text-alt text-red-400">
                        {errors.pName.message}
                    </span>)}


                <label class="label">
                    <span class="label-text">Description:</span>
                </label>
                <textarea 
                ref={pDesc} 
                class="textarea textarea-primary w-full max-w-xs" 
                placeholder="Bio"
                {...register("pDesc", { required:{
                    value:true,
                    message: 'Product description required'
                } })}
                />
                {errors.pDesc?.type === 'required' && (
                    <span className="label-text-alt text-red-400">
                        {errors.pDesc.message}
                    </span>)}


                <label class="label">
                    <span class="label-text">Price:</span>
                </label>
                <input 
                ref={pPrice} 
                type="number" 
                placeholder="Type here" 
                class="input input-bordered input-primary w-full max-w-xs" 
                {...register("pPrice", { required:{
                    value:true,
                    message: 'Product price required'
                } })}
                />
                {errors.pPrice?.type === 'required' && (
                    <span className="label-text-alt text-red-400">
                        {errors.pPrice.message}
                    </span>)}


                <label class="label">
                    <span class="label-text">Stock</span>
                </label>
                <input 
                ref={pStock} 
                type="number" 
                placeholder="Type here" 
                class="input input-bordered input-primary w-full max-w-xs" 
                {...register("pStock", { required: {
                    value:true,
                    message: 'Product Stock value required'
                } })}
                />
                {errors.pStock?.type === 'required' && (
                    <span className="label-text-alt text-red-400">
                        {errors.pStock.message}
                    </span>)}


                <label class="label">
                    <span class="label-text">Minimum Order:</span>
                </label>
                <input  
                ref={pMinOrder} 
                type="number" 
                placeholder="Type here" 
                class="input input-bordered input-primary w-full max-w-xs" 
                {...register("pMinOrder", { required: {
                    value:true,
                    message: 'Product Minimum order required'
                } })}
                />
                {errors.pMinOrder?.type === 'required' && (
                    <span className="label-text-alt text-red-400">
                        {errors.pMinOrder.message}
                    </span>)}


                <label class="label">
                    <span class="label-text">Image</span>
                </label>
                <input 
                ref={pImage} 
                type="file" 
                placeholder="Type here" 
                class="input input-bordered input-primary w-full max-w-xs" 
                {...register("pImage", { required: {
                    value:true,
                    message: 'Product Image required'
                } })}
                />
                {errors.pImage?.type === 'required' && (
                    <span className="label-text-alt text-red-400">
                        {errors.pImage.message}
                    </span>)}

                
                <div class="card-actions justify-end">
                    <button value="submit" type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
     </div>
  );
}

export default AddProduct;
