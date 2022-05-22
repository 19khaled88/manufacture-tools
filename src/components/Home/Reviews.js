import React from 'react'
import review from '../../assets/reviews.jpg'
const Reviews = () => {
  return (
    <>
      <div className="text-3xl pt-16 pb-10">Reviews</div>
      <div className="flex flex-col lg:flex-row container px-5 mx-auto">
        <img src={review} alt="" />
        <div className="flex flex-col justify-center items-center text-justify">
          <p className="text-2xl text-left w-full pb-4 text-slate-500">
            Review Reflects Progress{' '}
          </p>
          <h4 className="text-slate-400">
            It’s no secret that product reviews are an extremely powerful tool
            for online conversions as they provide social proof. Studies show
            that about 70% of customers look at product reviews before
            purchasing 1, and over 63% of customers are more likely to purchase
            if a site has product ratings and reviews 2. Some studies even
            suggest that these statistics are higher:
          </h4>
        </div>
      </div>
      <div className="container px-20 mx-auto flex flex-col ">
        <div class="flex flex-col lg:flex-row card card-side bg-base-100 shadow-xl my-4">
          <div class="avatar pl-4">
            <div class="w-36 h-36 lg:my-5 mx-auto  rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Michael S.</h2>
            <p className="text-justify">
              This is my first time buying this product.my cousin recommended it
              and it is worth it.i gifted it and the feedback for the same was
              good. Worth the money. Got it on Amazon when it was discounted
            </p>
            <div class="card-actions justify-end">
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row card card-side bg-base-100 shadow-xl my-4">
          <div class="avatar pl-4">
            <div class="w-36 h-36 lg:my-5 mx-auto rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">elahi</h2>
            <p className="text-justify">
              I am not satisfied with your company products. please inform to
              you seal the product as much as possible or max. We have no idea
              the product is used previously or not. All the product is open. At
              least the company should closed the box and seal the box.
            </p>
            <div class="card-actions justify-end">
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row card card-side bg-base-100 shadow-xl my-4">
          <div class="avatar pl-4">
            <div class="w-36 h-36 lg:my-5 mx-auto rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Qaynat Khan</h2>
            <p className="text-justify">
              None of the bottles were sealed, the quantity was half not 120ml
              that's mentioned on each bottle. The fragrance is good but not
              worth paying so much for half the quantity received. Most of the
              ppl in the review have mentioned abt the quantity being
              inadequate, seems to be a deliberate mistake by the vendor.
            </p>
            <div class="card-actions justify-end">
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
