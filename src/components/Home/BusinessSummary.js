import React from 'react'
import CountUp from 'react-countup'
import satisfiedCusotmer from '../../assets/customer-satisfaction-icon.jpg'
import financialGoal from '../../assets/financial-goal-achieve.jpg'
import manyProducts from '../../assets/improving-production-business.jpg'
import teamWork from '../../assets/people-with-teamwork.jpg'
const BusinessSummary = () => {
  return (
    <div>
      <p className="pt-16 text-3xl pb-10">Business Summary Page</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-7 px-5 mx-auto container">
        <div className="avatar flex flex-col">
          <div className="w-40 mx-auto mask mask-squircle">
            <img src={satisfiedCusotmer} />
          </div>
          <p className="pt-5">Our Happy customers</p>
          <span className="text-2xl text-rose-400">
            {' '}
            <CountUp start={0} end={1500} delay={3} />
            <>++</>
          </span>
        </div>
        <div className="avatar flex flex-col">
          <div className="w-40 mx-auto mask mask-squircle">
            <img src={financialGoal} />
          </div>
          <p className="pt-5">Annul meet revenue</p>
          <span>$500 billion</span>
        </div>
        <div className="avatar flex flex-col">
          <div className="w-40 mx-auto mask mask-squircle">
            <img src={manyProducts} />
          </div>
          <p className="pt-5">Product verities</p>
          <span>30 types of products</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-col lg:flex-row container mx-auto px-10">
        <div className="flex flex-col justify-center text-left">
          <h4 className="text-3xl text-slate-500">Teamwork</h4>
          <h4 className="text-3xl text-slate-500">Boost Creativity</h4>
          <p className="pb-2 pt-4 text-slate-400">
            eam spirit is the feeling of pride and loyalty that exists among the
            members of a team and that makes them want their team to do well or
            to be the best
          </p>
          <p className="text-slate-400 pb-8">
            Henry Ford's quote, "If everyone is moving forward together, then
            success takes care of itself," is one of my personal favorite quotes
            on teamwork.{' '}
          </p>
          <button className="w-36 rounded-md bg-purple-600 h-9 text-white text-lg ">
            Read More
          </button>
        </div>
        <img className="w-3/4 lg:w-1/2 mx-auto" src={teamWork} alt="" />
      </div>
    </div>
  )
}

export default BusinessSummary
