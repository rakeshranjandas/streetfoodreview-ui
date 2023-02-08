import React from "react"

export default function ReviewCard(props) {
  return (
    <div className="box">
      <p className="has-text-weight-bold">{props.review.shopName}</p>
      <p>
        <span className="has-text-danger">
          {new Array(parseInt(props.review.rating)).fill(0).map((x) => {
            return <StarRating />
          })}
        </span>
      </p>
      <p className="has-text-weight-light">
        <span>{props.review.description}</span>
      </p>
    </div>
  )
}

function StarRating() {
  return <>&#9733;</>
}
