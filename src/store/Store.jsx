import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import eventsReducer from "./eventsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    events: eventsReducer,
  },
});

export default store;
