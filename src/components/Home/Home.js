import React from 'react'
import Footer from '../Shared/Footer'
import Banner from './Banner'
import Benefits from './Benefits'
import BusinessSummary from './BusinessSummary'
import Reviews from './Reviews'
import Tools from './Tools'
import Winner from './Winner'


const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Benefits></Benefits>
      <Winner></Winner>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  )
}
export default Home
