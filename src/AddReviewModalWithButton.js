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

function initializeModal() {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active")
  }

  function closeModal($el) {
    $el.classList.remove("is-active")
  }

  function closeAllModals() {
    ;(document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal)
    })
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
  React.useEffect(function () {
    initializeModal()
  }, [])

  return (
    <div className="modal" id="modal-js-example">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add New Review</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <AddReviewForm />
        </section>
      </div>
    </div>
  )
}
