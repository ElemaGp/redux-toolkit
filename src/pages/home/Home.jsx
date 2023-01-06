import "./home.css"
import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from "../../features/user/userSlice"
import { Link } from "react-router-dom"


const Home = () => {

  const user = useSelector(state => state.user) // "const user" is declared to be equal to the "user" in userSlice.jsx. Meaning it now contains the initial state object properties that the "user" has in useSlice.jsx, and the properties' values will be updates accordingly when the actions are dispatched.
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers()) //dispatching the "fetchUser" action-creator function in userSlice, which will then dispach the action "user/fetchUsers" in userSlice.jsx.
  }, [])

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}

      
        <Link to="/cake" className="goToCakeBtn">Go to "Cake" page to see RTK being used to manage state in non-async operation </Link>
        <Link to="/icecream" className="goToCakeBtn">Go to "Icecream" page to see RTK being used to manage state in non-async operation where whenecer a cake is bought, no.of icream reduces by 1</Link>
      
    </div>
  )
}

export default Home