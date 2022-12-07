import { createSlice } from '@reduxjs/toolkit';

const initState = {
 
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // builder.addCase(fetchUserById.fulfilled, (state, action) => {
    //   // Add user to the state array
    //   state.entities.push(action.payload)
    // })
  },
});

export const authAction = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;