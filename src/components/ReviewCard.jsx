import { star } from "../assets/icons"

const ReviewCard = ({key, imgURL, feedback, rating, customerName}) => {
  return (
    <div className='shadow-3xl p-4 border-2 rounded-3xl border-coral-red bg-blen-darken'>
        <img src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px] m-auto"/>
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-6 justify-center items-center gap-2.5 flex">
            <img src={star} width={24} height={24} className="object-contain m-0"></img>
            <p className="font-montserrat text-xl text-slate-gray">{rating}</p>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard