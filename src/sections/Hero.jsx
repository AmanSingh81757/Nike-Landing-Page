import Button from "../components/Button"
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants/index'
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"


const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
    id="home"
    className="w-full p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
      <div
      className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="font-montserrat text-xl text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:-[72px] max-sm:leading-[82]">
          <span className="bg-white xl:whitespace-nowrap relative z-10 pr-10">The new Arrival</span> <br></br> <span className="text-coral-red inline-block mt-3">Nike Shoes</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum, incidunt corrupti quis ad quia minus excepturi nam consequatur velit!</p>
        <Button label="Show Now"
        iconURL = {arrowRight} />

        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, ind)=>(
            <div>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>


      <div className="relative flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-hero">
        <img src={bigShoeImg}
        alt="shoe collection"
        width={610}
        height={500}
        className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index)=>(
              <div key={shoe}>
                <ShoeCard
                imgURL = {shoe}
                changeBigShoeImage = {(shoe)=>{setBigShoeImg(shoe)}}
                bigShoeImg={bigShoeImg}/>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero