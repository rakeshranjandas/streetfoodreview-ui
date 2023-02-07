import React from "react"
import ReviewCard from "./ReviewCard"

export default function ReviewsList(props) {
  return (
    <div>
      {props.reviews.map((review) => {
        return <ReviewCard review={review} />
      })}
    </div>
  )
}
