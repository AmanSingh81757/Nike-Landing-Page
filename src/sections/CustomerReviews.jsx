import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque at ullam laboriosam aspernatur. Illo!</p>
      <div className="felx-1 flex justify-evenly mt-24 items-center max-lg:flex-col gap-14 ">
        {reviews.map((review)=>(
          <ReviewCard
          key={review.customerName}
          imgURL={review.imgURL}
          feedback={review.feedback}
          rating = {review.rating}
          customerName = {review.customerName}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews