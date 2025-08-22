import { createSlice } from "@reduxjs/toolkit";

export interface LangState {
  lang: "ar" | "en";
}

const initialState: LangState = {
  lang: "en"
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, { payload }) => {
      state.lang = payload;
      localStorage.setItem("lang", payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLang } = langSlice.actions;

export default langSlice.reducer;
