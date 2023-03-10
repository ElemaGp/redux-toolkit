import "./cake.css"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from "../../features/cake/cakeSlice"
import { Link } from "react-router-dom"


export const Cake = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes) //the reason "const numOfCakes" is equal to "state.cake.numOfCakes" and not "state.cake" like we did in the "user" section is that in the cakeSlice.jsx, "numOfCakes" is the only property of the cake in the initial state and so the only property we used in the reducer. If it had more properties in the initial state, like the "user" initial state had, then we would have used just "state.cake" so that we'll have access to all the properties of the cake. In fact in that case, i wouldn't have said "const numOfCakes=...", i would have said "const cake = useSelector(state => state.cake)"
    const dispatch = useDispatch()
    return (
      <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button> {/*dispatching the "ordered" action.*/}
        <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button> {/*dispatching the "restock" action. The "5" there is the payload */}

        
            <Link to="/" className="goToHomeBtn">Go to "Home" page to see RTK being used to manage state in an async operation </Link>
            <Link to="/icecream" className="goToHomeBtn">Go to "Icecream" page </Link>
        
      </div>
    )
  }

