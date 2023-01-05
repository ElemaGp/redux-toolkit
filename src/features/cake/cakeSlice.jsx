//This userSlice shows how to use rtk for managing state if async operations are NOT involved

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  numOfCakes: 20
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: state => { //"ordered" and "restocked" are the Action-Types. If the Action-Type is "ordered", numOfCakes is reduced by 1.
      state.numOfCakes--
    },
    restocked: (state, action) => { //"ordered" and "restocked" are the Action-Types. If the Action-Type is "restocked", numOfCakes incremented by the number in the payload.
      state.numOfCakes += action.payload
    }
  }
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions
