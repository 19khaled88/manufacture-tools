import React from 'react'
import benefit_icon from '../../assets/benefit.png'
import benefit from '../../assets/benefits-icon_1.png'
const Benefits = () => {
  return (
    <div>
      <p className="text-3xl">Benefit and offers</p>
      <div className="flex flex-col lg:flex-row ">
        <div className="flex-1">
          <img style={{ width: '550px' }} src={benefit} alt="" />
        </div>
        <div className="flex-1 items-center flex">
          <ul>
            <li className="py-3 flex flex-row items-center ">
              <img className="w-10 h-10 mr-6" src={benefit_icon} alt="" />
              <p className="text-left">
                We play role for All new brand product supply
              </p>
            </li>
            <li className="py-3 flex flex-row items-center">
              <img className="w-10 h-10 mr-6" src={benefit_icon} alt="" />
              <p className="text-left">
                We have country wide big network. No limitation of area coverage
              </p>
            </li>
            <li className="py-3 flex flex-row items-center">
              <img className="w-10 h-10 mr-6" src={benefit_icon} alt="" />
              <p className="text-left">
                We have special cell for mass branding and we are working
                continuously on distributed management
              </p>
            </li>
            <li className="py-3 flex flex-row items-center">
              <img className="w-10 h-10 mr-6" src={benefit_icon} alt="" />
              <p className="text-left">
                We lead 24/7 support center and specially trained consultant
                team
              </p>
            </li>
            <li className="py-3 flex flex-row items-center">
              <img className="w-10 h-10 mr-6" src={benefit_icon} alt="" />
              <p className="text-left">
                Our ever best offer in history is 50% discount on every premium
                product on upcoming fare in grand avenue
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Benefits
