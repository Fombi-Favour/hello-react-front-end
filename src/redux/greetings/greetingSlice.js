import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000//home/index';

const initialState = {
  loading: false,
  message: null,
};

export const fetchGreeting = createAsyncThunk('message/fetchGreeting', async () => {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data.content;
  } catch (err) {
    throw new Error('Failed to fetch greeting');
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.message = action.payload;
    }).addCase(fetchGreeting.rejected, (state) => {
      state.message = '';
    });
  },
});

export default greetingSlice.reducer;
