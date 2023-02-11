import React from "react"

const validationRules = {
  location: {
    validate: (val) => {
      return val !== ""
    },
    error: "Please provide a location.",
  },

  name: {
    validate: (val) => {
      return val !== ""
    },
    error: "Please provide a name.",
  },
}

function saveShop(formValues, onSuccess) {
  fetch(`http://localhost:8081/v1/shop`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  })
    .then((res) => res.json())
    .then((json) => {
      onSuccess(json)
    })
}

export default function AddReviewAddShop(props) {
  const [error, setError] = React.useState({})

  React.useEffect(() => {
    if (props.isModalOpen) {
      setError({})
    }
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

    saveShop(formValues, function (newShopData) {
      props.changeTaskToAddReview()
      props.addEditShops(newShopData)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="field">
        <label class="label">Location</label>
        <div class="control">
          <input
            name="location"
            class="input"
            type="text"
            placeholder="Location"
          />
        </div>
        <span className="has-text-danger is-size-6">
          {error.location ? error.location : ""}
        </span>
      </div>

      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input name="name" class="input" type="text" placeholder="Name" />
        </div>
        <span className="has-text-danger is-size-6">
          {error.name ? error.name : ""}
        </span>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-link">
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
    </form>
  )
}
