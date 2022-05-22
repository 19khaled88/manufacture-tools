import React from 'react'
import { useNavigate } from 'react-router-dom'
import bikebell from '../../assets/bike-bell.jpg'
import bicyclecrank from '../../assets/cycle-crank.png'
import cycleframe from '../../assets/cycle-frame.jpg'
import cyclehelmat from '../../assets/cycle-helmat1.png'
import bicyclesaddle from '../../assets/cycle-saddle.png'
import cassette from '../../assets/Mountain bike 9-speed cassette.jpg'
const Tools = () => {
  const navigate = useNavigate()
  const purchaseHandler = ({ price, min }) => {
    navigate('/purchase', { state: { price: price, min: min } })
  }
  return (
    <div className="flex flex-col">
      <p className="text-3xl pt-16 mb-10">Bicycle Tools</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-4 px-2 mx-auto">
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img className="lg:w-full" src={cassette} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">bicylce-cassette</h2>
            <p className="text-justify">
              A bicycle cassette is the cluster of sprockets located on the rear
              hub of your bike, slotting onto a freehub body
            </p>
            <div className="flex flex-row justify-between">
              <div className="card-actions justify-start">
                <div className="badge badge-outline">
                  Price :<span className="text-cyan-500 text-lg">$1500</span>
                </div>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  Stock :<span className="text-rose-500 text-lg">200</span>
                </div>
                <div className="badge badge-outline">
                  Min Order :<span className="text-rose-500 text-lg">50</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex  justify-end">
              <button
                className="btn btn-sm btn-accent w-1/3"
                onClick={() => purchaseHandler({ price: 50, min: 200 })}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img className="lg:w-full" src={bikebell} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              bicycle-bell
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-justify">
              A bicycle bell is a percussive signaling instrument mounted on a
              bicycle for warning pedestrians and other cyclists
            </p>
            <div className="flex flex-row justify-between">
              <div className="card-actions justify-start">
                <div className="badge badge-outline">
                  Price :<span className="text-cyan-500 text-lg">$1100</span>
                </div>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  Stock :<span className="text-rose-500 text-lg">240</span>
                </div>
                <div className="badge badge-outline">
                  Min Order :<span className="text-rose-500 text-lg">150</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex  justify-end">
              <button
                className="btn btn-sm btn-accent w-1/3"
                onClick={() => purchaseHandler({ price: 150, min: 240 })}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div className="card lg:max-w-lg-base-100 shadow-xl">
          <figure>
            <img className="lg:w-full" src={bicyclesaddle} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              bicycle-saddle
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-justify">
              A bicycle saddle, often called a bicycle seat, is one of five
              contact points on an upright bicycle, the others being the two
              pedals
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img className="lg:w-full" src={bicyclecrank} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              bicycle-crank
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-justify">
              Cranks are one of the most important parts of your bike, allowing
              you to convert the power produced by your legs into rotational
              motion
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img className="lg:w-full" src={cycleframe} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              cycle-frame
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-justify">
              A bicycle frame is the main component of a bicycle, onto which
              wheels and other components are fitted.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <figure>
            <img className="lg:w-full" src={cyclehelmat} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">cycle-helmat</h2>
            <p className="text-justify">
              Cycle helmets protect the head by reducing the rate at which the
              skull and brain are accelerated or decelerated by an impact.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
