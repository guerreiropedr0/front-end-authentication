import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie } from '../helper';

const login = createAsyncThunk('users/login', async (user) => {
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

const autoLogin = createAsyncThunk('users/autoLogin', async () => {
  const token = getCookie();
  const obj = {
    grant_type: 'refresh_token',
    refresh_token: token,
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
  };

  const resp = await fetch('http://localhost:3000/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
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
      if (payload.token) {
        setCookie('refresh_token', payload.token.refresh_token);
      }
      return payload;
    });
    builder.addCase(autoLogin.fulfilled, (_, { payload }) => {
      if (payload.token) {
        setCookie('refresh_token', payload.token.refresh_token);
      }
      return payload;
    });
  },
});

export {
  login, autoLogin,
};

export default userSlice.reducer;
