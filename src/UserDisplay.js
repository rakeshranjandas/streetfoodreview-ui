import React, {useState} from 'react'
import Reviews from './Reviews'
import Friends from './Friends'

export default function UserDisplay() {

    const [curDisplay, setCurDisplay] = useState('reviews')
    
    function setCurDisplayToReviews() {
      setCurDisplay('reviews')
    }

    function setCurDisplayToFriends() {
      setCurDisplay('friends')
    }

  return (
    <div>
        <ul>
            <li onClick={ setCurDisplayToReviews }> Reviews </li>
            <li onClick={ setCurDisplayToFriends }> Friends </li>
        </ul>

        { curDisplay === 'reviews' ? <Reviews /> : <Friends /> }

    </div>
  )
}
