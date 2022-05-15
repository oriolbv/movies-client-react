import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

export default configureStore({
  reducer: {
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});