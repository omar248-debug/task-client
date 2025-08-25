import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "@/featured/lang/languageSlice";

export const store = configureStore({
  reducer: {
    lang: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
