import React from 'react'
import 'tw-elements'
// import bicycle3 from '../../assets/banner-accessories-1.jpg'
// import bicycle2 from '../../assets/bicycle-equipment-2.jpg'
// import bicycle1 from '../../assets/bicycle-tools-1.jpg'
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import banner3 from '../../assets/banner-3.png'
import banner4 from '../../assets/banner-4.jpg'
import banner5 from '../../assets/banner-5.jpg'
import banner6 from '../../assets/banner-6.jpg'
const Banner = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active float-left w-full">
          <img src={banner1} className="block w-screen h-fit" alt="banner1" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={banner2} className="block w-screen h-fit" alt="banner2" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={banner3} className="block w-screen h-fit" alt="banner3" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={banner4} className="block w-screen h-fit" alt="banner4" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={banner5} className="block w-screen h-fit" alt="banner5" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={banner6} className="block w-screen h-fit" alt="banner6" />
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Banner
