import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await axios.get("http://localhost:8888/events");
  return response.data;
});

export const addEvent = createAsyncThunk("events/addEvent", async (event) => {
  const response = await axios.post("http://localhost:8888/events", event);
  return response.data;
});

export const deleteEvent = createAsyncThunk(
  "events/deleteEvent",
  async (id) => {
    await axios.delete(`http://localhost:8888/events/${id}`);
    return id;
  }
);

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.events.push(action.payload);
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.events = state.events.filter(
          (event) => event.id !== action.payload
        );
      });
  },
});

export default eventsSlice.reducer;
