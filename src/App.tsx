import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar/NavBar';
import ButtonModalOne from './components/base/ButtonModalOne';
import ButtonModalTwo from './components/base/ButtonModalTwo';
import ButtonForm from './features/buttonForm/ButtonForm';
import MainLayout from './layouts/mainLayout/MainLayout';

function App() {

    return (
        <Router>
        {/* <Navbar /> */}
        <div className="App">
         

            <Routes>
                <Route path='/' element={<MainLayout />} />
                <Route path="/form" element={<ButtonForm />} />
                <Route path='/modalone' element={<ButtonModalOne />}/>
                <Route path='/modalTwo' element={<ButtonModalTwo />} />
            </Routes>
        </div>
        </Router>
    )
};

export default App