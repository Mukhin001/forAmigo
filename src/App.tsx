import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/NavBar';
import { AddPostForm } from './features/posts/AddPostForm';
import { changeDisplay } from "./features/posts/openFormSlice";
import { useAppDispatch, useAppSelector } from './app/hooks';
import Modal from './components/base/Modal';
import { useState } from 'react';

function App() {
    const openForm = useAppSelector(state => state.openForm.value);
    const dispatch = useAppDispatch();
    
    const [title, setTitle] = useState('');
    const [p, setP] = useState('');
    const [openModal, setOpenModal] = useState(false);


    function opemModalOneFn() {
        setOpenModal(true);
        setTitle('Model One');
        setP('ONE');
    };

    function opemModalOTwoFn() {
        setOpenModal(true);
        setTitle('Model Two');
        setP('Two');
    };

    return (
        <Router>
        <Navbar />
        <div className="App">
            <section>
                <button 
                    onClick={() => dispatch(changeDisplay())}>{openForm ? 'Close' : 'Open'}</button>
            </section>

            <section>
                <button
                    onClick={opemModalOneFn}
                >Open Modal One</button>
            </section>

            <section>
                <button onClick={opemModalOTwoFn}>Open Modal Two</button>
            </section>
            <Routes>
            <Route
                path="/"
                element={
                <>
                    {openForm && <AddPostForm />}
                    {openModal && <Modal title={title} p={p} setOpenModal={setOpenModal} />}
                </>
                }
            ></Route>
            </Routes>
        </div>
        </Router>
    )
};

export default App