import React from "react"

const validationRules = {
  shop: {
    validate: (val) => {
      let x = parseInt(val)
      return typeof x === "number" && x > 0
    },
    error: "Please select a shop",
  },
}

export default function AddReviewAddReview(props) {
  const [curReview, setCurReview] = React.useState(
    Object.keys(props.currentReviewAddEdit).length > 0
      ? props.currentReviewAddEdit
      : {
          shopId: "0",
          rating: "0",
          description: "",
        }
  )

  const [error, setError] = React.useState({})

  React.useEffect(() => {
    if (props.isModalOpen) setError({})
  }, [props.isModalOpen])

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formValues = Object.fromEntries(formData.entries())
    let has_error = false

    for (const key in formValues) {
      if (!(key in validationRules)) continue
      if (validationRules[key].validate(formValues[key])) continue

      has_error = true
      setError((prev) => {
        return { ...prev, [key]: validationRules[key].error }
      })
    }

    if (has_error) return
    props.closeModal()
  }

  function closeModal() {
    setError({})
    props.closeModal()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="field columns is-vcentered">
        <div className="control column">
          <span class="label">Shop</span>
          <div class="control">
            <div class="select">
              <select name="shop" defaultValue={curReview.shopId}>
                <option value="0">Select</option>
                <option value="1">Shop1</option>
                <option value="2">Shop2</option>
              </select>
            </div>
          </div>
          <span className="has-text-danger is-size-6">
            {error.shop ? error.shop : ""}
          </span>
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
            <select name="rating" defaultValue={curReview.rating}>
              {[0, 1, 2, 3, 4, 5].map((x) => {
                return <option value={x}>{x}</option>
              })}
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea
            name="desc"
            class="textarea"
            placeholder="Description"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-link">
            Add Review
          </button>
        </div>
        <div class="control">
          <button class="button is-link is-light" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  )
}
