import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { IProductItem, TProductState } from "../model/data";


const initialProductState: TProductState = {
    items: [],
  };

  const productSlice = createSlice({
    name: "product",
    initialState: initialProductState,
    reducers: {
      addItemToProducts(state, action: PayloadAction<IProductItem>) {
        const newItem = action.payload;
        state.items.push(newItem);
      },
      clearProducts(state) {
        state.items = [];
      },
      addProductSet(state, action: PayloadAction<IProductItem[]>) {
        state.items = [];
        const items = action.payload;
        state.items.push(...items);
      }
    },
  });
  
  export const productActions = productSlice.actions;
  
  export const productSelector = (state: RootState) => state.product;
  
  export default productSlice;
  