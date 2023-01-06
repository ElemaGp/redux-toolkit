import "./icecream.css"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
  const [value, setValue] = React.useState(1)
  const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)    //the reason "const numOfIcecreams" is equal to "state.icecream.numOfIcecreams" and not "state.icecream" like we did in the "user" section is that in the IcecreamSlice.jsx, "numOfIcecreams" is the only property of the icecream in the initial state and so the only property we used in the reducer. If it had more properties in the initial state, like the "user" initial state had, then we would have used just "state.icecream" so that we'll have access to all the properties of the icecream. In fact in that case, i wouldn't have said "const numOfIcecreams=...", i would have said "const icecream = useSelector(state => state.icecream)"
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <input
        type='number'
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}> {/*passing the "value" value as the payload */}
        Restock Ice creams
      </button>
    </div>
  )
}
