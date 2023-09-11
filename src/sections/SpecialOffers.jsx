import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer}
        width={773}
        height={687}
        className='w-full object-contain'/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Special <span className="text-coral-red">Offer</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum, incidunt corrupti quis ad quia minus excepturi nam consequatur velit!</p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque vero ex aliquam incidunt, quibusdam dolores?</p>
        <div className="flex-wrap gap-4 mt-11 flex">
          <Button label="Shop Now" iconURL={arrowRight}/>
          <Button label="Learn More"/>
        </div>
      </div>

    </section>
  )
}

export default SpecialOffers