import React from 'react'
import Footer from '../Shared/Footer'
import Banner from './Banner'
import BusinessSummary from './BusinessSummary'
import Reviews from './Reviews'
import Tools from './Tools'

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  )
}
export default Home
