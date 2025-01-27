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

interface PropsButtonForm {
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>, 
    content: string, 
    setContent: React.Dispatch<React.SetStateAction<string>>,
};

export const AddPostForm = ({ title, setTitle, content, setContent }: PropsButtonForm) => {
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
        // Prevent server submission
        e.preventDefault();
        
        setTitle('');
        setContent('');
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
                <input type="text" id="postTitle" defaultValue={title} required 
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="postContent">Content:</label>
                <textarea id="postContent" name="postContent" defaultValue={content} required 
                    onChange={e => setContent(e.target.value)} 
                />
                <button>Save Post</button>
            </form>
        </section>
    )
};
