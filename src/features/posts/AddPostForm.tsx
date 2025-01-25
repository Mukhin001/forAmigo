import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { type Post, postAdded } from '../posts/postsSlice';
import { changeDisplay } from '../../components/openFormSlice';


// TS types for the input fields
// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement
  postContent: HTMLTextAreaElement
};
interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields
};

export const AddPostForm = () => {
    const dispatch = useAppDispatch();
    const displayValue = useAppSelector(state => state.openDispale.value);
    let posts = useAppSelector(state => state.posts.length);

    const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
        // Prevent server submission
        e.preventDefault()

        const { elements } = e.currentTarget;
        const title = elements.postTitle.value;
        const content = elements.postContent.value;

        const newPost: Post = {
            id: posts + 1,  
            title,
            content,
        }
        dispatch(postAdded(newPost));

        e.currentTarget.reset();
        dispatch(changeDisplay());
    };

    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}
             style={{
                display: displayValue ? 'grid' : 'none',
                gap: 10,
                margin: 10,
            }}>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" id="postTitle" defaultValue="" required />

                <label htmlFor="postContent">Content:</label>
                <textarea id="postContent" name="postContent" defaultValue="" required />
                <button>Save Post</button>
            </form>
        </section>
    )
};
