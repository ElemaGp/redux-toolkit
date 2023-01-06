import "./icecream.css"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from "../../features/icecream/iceCreamSlice"
import { Link } from "react-router-dom"


export const Icecream = () => {
  
  const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)    //the reason "const numOfIcecreams" is equal to "state.icecream.numOfIcecreams" and not "state.icecream" like we did in the "user" section is that in the IcecreamSlice.jsx, "numOfIcecreams" is the only property of the icecream in the initial state and so the only property we used in the reducer. If it had more properties in the initial state, like the "user" initial state had, then we would have used just "state.icecream" so that we'll have access to all the properties of the icecream. In fact in that case, i wouldn't have said "const numOfIcecreams=...", i would have said "const icecream = useSelector(state => state.icecream)"
  const dispatch = useDispatch()

  const [value, setValue] = useState(1);
  
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <input
        type='number'
        value={value}
        onChange={e => setValue(parseInt(e.target.value))} //you have to use the "parseInt" to convert the value to an integer because html input fields return everything as a string, even numbers. So if you dont use "parseInt" to convert it to a string, the number you type in the input field will be a string and the redux code will just concatenate it with the previous value of the state instead of adding it.
      />
      <button onClick={() => dispatch(restocked(value))}> {/*passing the value of "value" as the payload */}
        Restock Ice creams
      </button>
    
    <div className="links">
      <Link to="/">Go to "Home" page</Link>
      <Link to="/cake">Go to "Cake" page</Link>
    </div>
    </div>
  )
}
