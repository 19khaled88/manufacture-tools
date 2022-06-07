import React, { useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import review from '../../assets/reviews.jpg'
import './home.css'

const Reviews = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://evening-wildwood-96784.herokuapp.com/rating')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className="reviewClass">
      <div className="text-3xl pb-10 " style={{ paddingTop: '700px' }}>
        Reviews
      </div>
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
      <div className="container px-20 mx-auto flex flex-col reviewClass">
        {data.map((result) => (
          <div
            key={result._id}
            className="flex flex-col lg:flex-row card card-side bg-base-100 shadow-xl my-4"
          >
            <div className="avatar pl-4">
              <div className="w-36 h-36 lg:my-5 mx-auto  rounded-full">
                <img src="https://api.lorem.space/image/face?hash=92310" />
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title">{result.user}</h2>
              <p className="text-justify">{result.reviewData}</p>
              <div className="card-actions justify-end">
                <ReactStars
                  value={result.currentRating}
                  count={5}
                  size={40}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
