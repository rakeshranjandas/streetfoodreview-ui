import React from "react"
import AddReviewAddReview from "./AddReviewAddReview"
import AddReviewAddShop from "./AddReviewAddShop"

export default function AddReviewForm(props) {
  return (
    <div>
      {props.curTask === "add_shop" && (
        <AddReviewAddShop changeTaskToAddReview={props.changeTaskToAddReview} />
      )}
      {props.curTask === "add_review" && (
        <AddReviewAddReview
          changeTaskToAddShop={props.changeTaskToAddShop}
          closeModal={props.closeModal}
          currentReviewAddEdit={props.currentReviewAddEdit}
          isModalOpen={props.isModalOpen}
        />
      )}
    </div>
  )
}
