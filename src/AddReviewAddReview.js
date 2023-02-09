import React from "react"

export default function AddReviewAddReview(props) {
  return (
    <div>
      <div class="field columns is-vcentered">
        <div className="control column">
          <span class="label">Shop</span>
          <div class="control">
            <div class="select">
              <select>
                <option>Select</option>
                <option>Shop1</option>
                <option>Shop2</option>
              </select>
            </div>
          </div>
        </div>
        <div className="control column">
          <a class="button is-primary" onClick={props.changeTaskToAddShop}>
            Add New Shop
          </a>
        </div>
      </div>

      <div class="field">
        <label class="label">Rating</label>
        <div class="control">
          <div class="select">
            <select>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea class="textarea" placeholder="Description"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" onClick={props.closeModalAction}>
            Add Review
          </button>
        </div>
        <div class="control">
          <button
            class="button is-link is-light"
            onClick={props.closeModalAction}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
