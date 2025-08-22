import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "@/app/featured/lang/languageSlice";

export const store = configureStore({
  reducer: {
    lang: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
