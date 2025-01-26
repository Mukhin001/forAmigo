import React, { FC, SetStateAction } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { type Post, postAdded } from '../posts/postsSlice';
import { changeDisplay } from './openFormSlice';
import { Dispatch } from '@reduxjs/toolkit';


// TS types for the input fields
// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement
  postContent: HTMLTextAreaElement
};
interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields
};

interface PerentProps {
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>,
}

export const AddPostForm = ({ title, setTitle, content, setContent}: PerentProps) => {
    const dispatch = useAppDispatch();
    const openForm = useAppSelector(state => state.openForm.value);
    //const displayValue = useAppSelector(state => state.openForm.value);
    let posts = useAppSelector(state => state.posts.length);
   
    
    // const newPost: Post = {
    //     id: posts + 1,  
    //     title: '',
    //     content: '',
    // };

    const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
        // Prevent server submission
        e.preventDefault()
        setTitle('');
        setContent('');
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
                <input type="text" id="postTitle" value={title} required 
                    onChange={e => setTitle(e.target.value)}
                />

                <label htmlFor="postContent">Content:</label>
                <textarea id="postContent" name="postContent" value={content} required 
                    onChange={e => setContent(e.target.value)} 
                />
                <button>Save Post</button>
            </form>
        </section>
    )
};
