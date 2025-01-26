import { createSlice } from "@reduxjs/toolkit";
// action: PayloadAction<OpenForm> , PayloadAction 
interface OpenForm {
    value: boolean,
};

const initialState: OpenForm = {
    value: false,
};

const openFormSlice = createSlice({
    name: 'openForm',
    initialState,
    reducers: {
        changeDisplay: (state, ) => {
            state.value = !state.value;
        },
    },
});

export const { changeDisplay } = openFormSlice.actions;

export default openFormSlice.reducer;