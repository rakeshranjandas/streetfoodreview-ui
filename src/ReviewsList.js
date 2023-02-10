import React from "react"
import ReviewCard from "./ReviewCard"
import AddReviewButton from "./AddReviewButton"

export default function ReviewsList(props) {
  return (
    <div>
      <AddReviewButton openModal={props.openModal} />

      <div className="mt-5">
        {props.reviews.map((review) => {
          return <ReviewCard review={review} />
        })}
      </div>
    </div>
  )
}
