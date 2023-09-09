import Button from "../components/Button"
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants/index'

const Hero = () => {
  return (
    <section
    id="home"
    className="w-full border-red-200 border-2 p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
      <div
      className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="font-montserrat text-xl text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:-[72px] max-sm:leading-[82]">
          <span className="bg-white xl:whitespace-nowrap relative z-10 pr-10">The new Arrival</span> <br></br> <span className="text-coral-red inline-block mt-3">Nike Shoes</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum, incidunt corrupti quis ad quia minus excepturi nam consequatur velit!</p>
        <Button label="Show Now"
        iconURL = {arrowRight} />

        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, ind)=>(
            <div>
              <p >{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Hero