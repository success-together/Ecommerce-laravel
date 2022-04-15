import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    gridView: true,
    productDetailLoading: false,
    productsLoading: false,
    loginLoading: false,
    addPrductLoading: false
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleView(state) {
            state.gridView = !state.gridView;
        },
        pDetailLoading(state) {
            state.productDetailLoading = !state.productDetailLoading;
        },
        productsLoading(state) {
            state.productsLoading = !state.productsLoading;
        },
        loginLoading(state) {
            state.loginLoading = !state.loginLoading;
        },
        addPrductLoading(state) {
            state.addPrductLoading = !state.addPrductLoading;
        }
    }
});


export const uiActions = uiSlice.actions;

export default uiSlice;