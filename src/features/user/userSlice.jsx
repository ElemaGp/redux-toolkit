import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//initial state section below
const initialState = {
  loading: false,
  users: [],
  error: ''
}


//actions and doing the async/api call section below
// createAsyncThunk automatically generates pending, fulfilled and rejected action types aka "start, success, failure"
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => { //"user/fetchUsers" is the "action"
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
})

//you dont need a "try, catch" block for redux. Redux will automatically catch the error.
//for login, "const fetchUsers" will be equivalent to "const login".



//reducer section below
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {  //this means that if the case of the action is fetchUser.pending (ie fetchUsers_start), "state.loading" becomes true
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  }
})

export default userSlice.reducer