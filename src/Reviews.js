import React from "react"
import ReviewsList from "./ReviewsList"
import ReviewsMap from "./ReviewsMap"

export default function Reviews() {
  const [currentView, setCurrentView] = React.useState("list")

  function setViewToList() {
    setCurrentView("list")
  }

  function setViewToMap() {
    setCurrentView("map")
  }

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            onClick={setViewToList}
            name="reviews-view"
            checked={currentView === "list"}
          />
          List
        </label>
        <label>
          <input
            type="radio"
            onClick={setViewToMap}
            name="reviews-view"
            checked={currentView === "map"}
          />
          Map
        </label>
      </div>

      <div>{currentView === "list" ? <ReviewsList /> : <ReviewsMap />}</div>
    </div>
  );
}
