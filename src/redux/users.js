import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const login = createAsyncThunk('users/login', async (user) => {
  const resp = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await resp.json();

  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (_, action) => action.payload);
  },
});

export {
  login,
};

export default userSlice.reducer;
