import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie } from '../helper';

const login = createAsyncThunk('users/login', async (user) => {
  user.grant_type = 'password';
  user.client_id = 'tmYqBiCtWZutiQj1uhxEZCqiWOPH77jxrqI-2VxQHNU';
  user.client_secret = 'eG5rQ1VfovKLG_QtIcRv3AeplBLkGQ_rqZSxbzA8eVA';
  console.log(user);
  const resp = await fetch('http://localhost:3000/oauth/token', {
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
    builder.addCase(login.fulfilled, (_, { payload }) => {
      if (payload.user) {
        setCookie('token', payload.token);
      }
      return payload;
    });
  },
});

export {
  login,
};

export default userSlice.reducer;
