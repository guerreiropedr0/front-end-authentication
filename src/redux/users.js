import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie } from '../helper';

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

const autoLogin = createAsyncThunk('/auto-login', async () => {
  const resp = await fetch('http://localhost:3000/api/auto-login', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie()}`,
    },
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
    builder.addCase(autoLogin.fulfilled, (_, { payload }) => {
      if (payload.user) {
        setCookie('token', payload.token);
      }
      return payload;
    });
  },
});

export {
  login, autoLogin,
};

export default userSlice.reducer;
