import React from "react"
import ReviewsList from "./ReviewsList"
import ReviewsMap from "./ReviewsMap"
import AddReviewModal from "./AddReviewModal"

export default function Reviews() {
  const [currentView, setCurrentView] = React.useState("list")
  const [reviews, setReviews] = React.useState([])
  const [shops, setShops] = React.useState([])
  const [currentReviewAddEdit, setCurrentReviewAddEdit] = React.useState({})
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  React.useEffect(() => {
    fetch("http://localhost:8081/v1/user/1/reviews")
      .then((res) => res.json())
      .then((json) => {
        setReviews(json)
      })

    fetch("http://localhost:8081/v1/shop")
      .then((res) => res.json())
      .then((json) => {
        setShops(json)
      })
  }, [])

  function addEditShops(newShopData) {
    let prevShops = [...shops]
    let done = false

    for (let i = 0; i < prevShops.length; i++) {
      if (prevShops[i].id == newShopData.id) {
        prevShops[i] = { ...newShopData }
        done = true
      }
    }

    if (!done) prevShops.push({ ...newShopData })

    setShops(prevShops)

    setCurrentReviewAddEdit((p) => {
      return { ...p, shopId: newShopData.id }
    })
  }

  function changeView(e) {
    setCurrentView(e.target.value)
  }

  function openModal(review) {
    setCurrentReviewAddEdit(review)
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <div>
      <div className="control columns">
        <label className="radio column is-1">
          <input
            type="radio"
            onChange={changeView}
            name="reviews-view"
            checked={currentView === "list"}
            className="mr-2"
            value="list"
          />
          List
        </label>
        <label className="radio column is-1">
          <input
            type="radio"
            onChange={changeView}
            name="reviews-view"
            checked={currentView === "map"}
            className="mr-2"
            value="map"
          />
          Map
        </label>
      </div>

      <div>
        {currentView === "list" ? (
          <ReviewsList reviews={reviews} openModal={openModal} />
        ) : (
          <ReviewsMap />
        )}
      </div>

      <AddReviewModal
        closeModal={closeModal}
        currentReviewAddEdit={currentReviewAddEdit}
        setCurrentReviewAddEdit={setCurrentReviewAddEdit}
        shops={shops}
        addEditShops={addEditShops}
        isModalOpen={isModalOpen}
      />
    </div>
  )
}
