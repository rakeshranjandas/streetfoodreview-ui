import React from "react"
import AddReviewModal from "./AddReviewModal"

export default function AddReviewButton(props) {
  function openAddReviewModal() {
    props.openModal({})
  }

  return (
    <div>
      <button
        className="button is-info js-modal-trigger"
        data-target="modal-js-example"
        onClick={openAddReviewModal}
      >
        &#43; Add New Review
      </button>
    </div>
  )
}
