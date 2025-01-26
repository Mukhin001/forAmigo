import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// export interface Post {
//     id: number,
//     title: string,
//     content: string,
// }

// export interface Title {
//     title: string,
// }
// export interface Content {
//     content: string,
// }

// const initialState: Post[] = [
//     // { id: 1, title: 'First Post!', content: 'Hello!' },
//     // { id: 2, title: 'Second Post', content: 'More text' },
// ];
const initialState: string = '';

const postsSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        // postAdded(state, action: PayloadAction<Post>) {
        //     state.push(action.payload)
        // },
        titleAdded(state, action: PayloadAction<string>) {
            state = action.payload;
        }
    },
});

export const { titleAdded } = postsSlice.actions;

export default postsSlice.reducer;