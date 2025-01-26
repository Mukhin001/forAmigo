import React from 'react';

import { useAppDispatch } from '../../app/hooks';
import { changeDisplay } from './openFormSlice';


interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement
  postContent: HTMLTextAreaElement
};
interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields
};

export const AddPostForm = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
        // Prevent server submission
        e.preventDefault()
        e.currentTarget.reset();
        dispatch(changeDisplay());
    };


    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}
             style={{
                display: 'grid',
                gap: 10,
                margin: 10,
            }}>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" id="postTitle" value={'title'} required 
                    onChange={(e) => ''}
                />

                <label htmlFor="postContent">Content:</label>
                <textarea id="postContent" name="postContent"  required 
                    onChange={e => e} 
                />
                <button>Save Post</button>
            </form>
        </section>
    )
};
