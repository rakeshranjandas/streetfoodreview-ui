import React from "react"
import ReviewsList from "./ReviewsList"
import ReviewsMap from "./ReviewsMap"

export default function Reviews() {
  const [currentView, setCurrentView] = React.useState("list")

  function changeView(e) {
    const { name, value } = e.target
    setCurrentView(value)
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

      <div>{currentView === "list" ? <ReviewsList /> : <ReviewsMap />}</div>
    </div>
  )
}
