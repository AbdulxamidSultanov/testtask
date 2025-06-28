import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SelectListType, sliceType } from "../../types";

const initialState: sliceType = {
  inputConfig: [],
  expValue: "",
  aboutValue: "",
  cerfValue: "",
  degreeValue: "",
  skilsValue: "",
};

export const configSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    addInputConfig: (state, action: PayloadAction<SelectListType>) => {
      state.inputConfig.push(action.payload);
    },
    deleteInputConfig: (state, action: PayloadAction<string>) => {
      state.inputConfig = state.inputConfig.filter(
        (input) => input.value !== action.payload
      );
    },
    changeExpValue: (state, action: PayloadAction<string>) => {
      state.expValue = action.payload;
    },
    changeSkilsValue: (state, action: PayloadAction<string>) => {
      state.skilsValue = action.payload;
    },
    changeAboutValue: (state, action: PayloadAction<string>) => {
      state.aboutValue = action.payload;
    },
    changeDegreeValue: (state, action: PayloadAction<string>) => {
      state.degreeValue = action.payload;
    },
    changeCerfValue: (state, action: PayloadAction<string>) => {
      state.cerfValue = action.payload;
    },
  },
});

export const {
  addInputConfig,
  deleteInputConfig,
  changeAboutValue,
  changeCerfValue,
  changeDegreeValue,
  changeExpValue,
  changeSkilsValue,
} = configSlice.actions;
export default configSlice.reducer;
