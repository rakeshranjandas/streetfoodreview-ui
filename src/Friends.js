import React from 'react'
import User from './User'

export default function Friends() {

  const [friendList, setFriendList] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:8081/v1/user/1/friends")
      .then((res) => res.json())
      .then((json) => {setFriendList(json)})
  }, [])
  
  return (
    <div>
      {
        friendList.map(user => {
          return <User key = {user.id} userDetails = {user}/>
        })
      }
    </div>
  )
}


