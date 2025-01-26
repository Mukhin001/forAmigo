import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/NavBar';
//import { PostsList } from './features/posts/PostList';
import { AddPostForm } from './features/posts/AddPostForm';
import { changeDisplay } from "./features/posts/openFormSlice";
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Post } from './features/posts/postsSlice';
import { useState } from 'react';


function App() {
    const openForm = useAppSelector(state => state.openForm.value);
    const dispatch = useAppDispatch();
    const [id, setId] = useState(0)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <Router>
        <Navbar />
        <div className="App">
            <section>
                <button 
                    onClick={() => dispatch(changeDisplay())}>{openForm ? 'Close' : 'Open'}</button>
                </section>
            <Routes>
            <Route
                path="/"
                element={
                <>
                    {openForm && <AddPostForm 
                        title={title} 
                        setTitle={setTitle}
                        content={content} 
                        setContent={setContent}
                    />}
                    {/* <PostsList /> */}
                </>
                }
            ></Route>
            </Routes>
        </div>
        </Router>
    )
};

export default App