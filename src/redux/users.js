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
