import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_GREETING = './greetings/LOAD_GREETING';

const greetingsReducer = (state = '', action) => {
  switch (action.type) {
    case `${GET_GREETING}/fulfilled`:
      return action.payload.message;
    default:
      return state;
  }
};

const getGreeting = createAsyncThunk(
  GET_GREETING,
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/random_message');
    const data = await response.json();
    console.log(data.message)
    return data
  },
);

export { greetingsReducer, getGreeting };