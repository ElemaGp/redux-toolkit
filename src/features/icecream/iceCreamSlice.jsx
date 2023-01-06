import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialState = {
  numOfIcecreams: 10
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: state => {         //"ordered" and "restocked" are the actions. If the action is "ordered", numOfIcecreams is reduced by 1.
      state.numOfIcecreams--
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload    //"ordered" and "restocked" are the actions. If the action is "restocked", numOfIcecreams incremented by the number in the payload.
    }
  },
  extraReducers: builder => {
    builder.addCase(cakeOrdered, state => {     //"extraReducers" in non-async redux/rtk operations specify what happens to that feature if a change occurs in another feature. This is optional. Eg. in this case, if the cakeSlice's action "ordered" is dispatched (note that i imported the cakeSlice "ordered" action here above as "cakeOrdered"), then numOfIcecreams decrements by 1.
      state.numOfIcecreams--
    })
  }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions
