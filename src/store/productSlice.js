import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../util/StatusCode";

const initialState = {
  data: [],
  status: 'idle',
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getProducts.pending, (state, action) => {
        state.status = StatusCode.LOADING;
    })
    .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE
    })
    .addCase(getProducts.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
    })
  }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        return data;
        // dispatch(fetchProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
})

// export function getProducts() {
//   return async function getProductsThunk(dispatch) {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }
//       const data = await response.json();
//       dispatch(fetchProducts(data));
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };
// }