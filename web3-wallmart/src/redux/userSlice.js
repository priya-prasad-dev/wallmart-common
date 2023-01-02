import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId:'',
  userName:'',
  userEmail:'',
  userContact:''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
        state.userId=action.payload.userId;
        state.userName=action.payload.userName;
        state.userEmail=action.payload.userEmail;
        state.userContact=action.payload.userContact;
    },
    logout: (state) => {
        state = initialState;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setUserDetails, logout } = userSlice.actions

export default userSlice.reducer