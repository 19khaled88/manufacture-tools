import React, { useRef, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../DB/firebase.init'
const MyReviews = () => {
  const review = useRef('')
  const [loginUser] = useAuthState(auth)
  const [currentRating, setCurrentRating] = useState('')
  const ratingChanged = (newRating) => {
    setCurrentRating(newRating)
  }
  const reviewHandler = () => {
    const reviewData = review.current.value
    const user = loginUser?.displayName
    const value = { reviewData, currentRating, user }
    fetch('http://localhost:4000/rating', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }
  return (
    <div className="">
      <div className="card w-2/4 bg-base-100 shadow-xl">
        <div className="card-body w-full">
          <h2 className="card-title ">Drop What in your mind</h2>
          <input
            ref={review}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full"
          />
          <div className="flex justify-end">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={40}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>

          <div className="card-actions justify-end">
            <button
              className="btn btn-sm bg-emerald-500 outline-0"
              onClick={reviewHandler}
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyReviews
