import React from "react"
import AddReviewForm from "./AddReviewForm"

export default function AddReviewModalWithButton() {
  return (
    <div>
      <button
        className="button is-info js-modal-trigger"
        data-target="modal-js-example"
      >
        &#43; Add New Review
      </button>

      <AddReviewModal />
    </div>
  )
}

let initializeModalActions = {
  openModal: function ($el) {
    $el.classList.add("is-active")
  },

  closeModal: function ($el) {
    $el.classList.remove("is-active")
  },

  closeAllModals: function ($el) {
    ;(document.querySelectorAll(".modal") || []).forEach(($modal) => {
      initializeModalActions.closeModal($modal)
    })
  },
}

function initializeModal() {
  // Functions to open and close a modal
  function openModal($el) {
    initializeModalActions.openModal($el)
  }

  function closeModal($el) {
    initializeModalActions.closeModal($el)
  }

  function closeAllModals() {
    initializeModalActions.closeAllModals()
  }

  // Add a click event on buttons to open a specific modal
  ;(document.querySelectorAll(".js-modal-trigger") || []).forEach(
    ($trigger) => {
      const modal = $trigger.dataset.target
      const $target = document.getElementById(modal)

      $trigger.addEventListener("click", () => {
        openModal($target)
      })
    }
  )

  // Add a click event on various child elements to close the parent modal
  ;(
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal")

    $close.addEventListener("click", () => {
      closeModal($target)
    })
  })

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals()
    }
  })
}

function AddReviewModal() {
  const [curTask, setCurTask] = React.useState("add_review")

  function changeTaskToAddShop() {
    setCurTask("add_shop")
  }

  function changeTaskToAddReview() {
    setCurTask("add_review")
  }

  React.useEffect(function () {
    initializeModal()
  }, [])

  return (
    <div className="modal" id="modal-js-example">
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
            closeModalAction={initializeModalActions.closeAllModals}
          />
        </section>
      </div>
    </div>
  )
}
