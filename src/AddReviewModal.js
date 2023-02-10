import React from "react"
import AddReviewForm from "./AddReviewForm"

export default function AddReviewModal(props) {
  const [curTask, setCurTask] = React.useState("add_review")

  function changeTaskToAddShop() {
    setCurTask("add_shop")
  }

  function changeTaskToAddReview() {
    setCurTask("add_review")
  }

  function closeModal() {
    props.closeModal()
  }

  function bindCloseActions() {
    // Add a click event on various child elements to close the parent modal
    ;(
      document.querySelectorAll(
        ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
      ) || []
    ).forEach(($close) => {
      $close.addEventListener("click", () => {
        closeModal()
      })
    })

    // Add a keyboard event to close all modals
    document.addEventListener("keydown", (event) => {
      const e = event || window.event

      if (e.keyCode === 27) {
        // Escape key
        closeModal()
      }
    })
  }

  React.useEffect(() => {
    bindCloseActions()
  }, [])

  React.useEffect(() => {
    if (props.isModalOpen) changeTaskToAddReview()
  }, [props.isModalOpen])

  return (
    <div className={[props.isModalOpen ? "is-active" : "", "modal"].join(" ")}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            {curTask === "add_review" ? "Add New Review" : "Add New Shop"}
          </p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <AddReviewForm
            curTask={curTask}
            changeTaskToAddShop={changeTaskToAddShop}
            changeTaskToAddReview={changeTaskToAddReview}
            closeModal={closeModal}
            curReview={props.review}
          />
        </section>
      </div>
    </div>
  )
}
