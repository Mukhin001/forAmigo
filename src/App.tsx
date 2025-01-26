import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/NavBar';
import { AddPostForm } from './features/posts/AddPostForm';
import { changeDisplay } from "./features/posts/openFormSlice";
import { useAppDispatch, useAppSelector } from './app/hooks';

function App() {
    const openForm = useAppSelector(state => state.openForm.value);
    const dispatch = useAppDispatch();

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
                    {openForm && <AddPostForm />}
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