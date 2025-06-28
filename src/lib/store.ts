import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./../features/componentSlice/configSlice"

export const store = configureStore({
  reducer: {
    components: configReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
