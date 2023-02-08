import React from "react"
import ReviewCard from "./ReviewCard"
import AddReviewModalWithButton from "./AddReviewModalWithButton"

export default function ReviewsList(props) {
  return (
    <div>
      <AddReviewModalWithButton />

      <div className="mt-5">
        {props.reviews.map((review) => {
          return <ReviewCard review={review} />
        })}
      </div>
    </div>
  )
}
