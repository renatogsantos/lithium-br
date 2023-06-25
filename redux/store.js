import { configureStore } from "@reduxjs/toolkit";
import { produtosReducer } from "./features/produtosReducer";

export const store = configureStore({
  reducer: {
    produtos: produtosReducer,
  },
});
