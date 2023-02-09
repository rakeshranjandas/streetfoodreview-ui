import React from "react"

export default function AddReviewAddShop(props) {
  return (
    <div>
      <div class="field">
        <label class="label">Location</label>
        <div class="control">
          <input class="input" type="text" placeholder="Location" />
        </div>
      </div>

      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Location" />
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" onClick={props.changeTaskToAddReview}>
            Add Shop
          </button>
        </div>
        <div class="control">
          <button
            class="button is-link is-light"
            onClick={props.changeTaskToAddReview}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
