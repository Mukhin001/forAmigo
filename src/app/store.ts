import { configureStore } from '@reduxjs/toolkit'
import titleReducer from '../features/posts/postsSlice';
import openFormReduser from '../features/posts/openFormSlice';

export const store = configureStore({
    reducer: {
        title: titleReducer,
        openForm: openFormReduser,
    },
});

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>
