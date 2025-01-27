import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/NavBar';
import ButtonModalOne from './components/base/ButtonModalOne';
import ButtonModalTwo from './components/base/ButtonModalTwo';
import ButtonForm from './features/buttonForm/ButtonForm';

function App() {

    return (
        <Router>
        <Navbar />
        <div className="App">
         

            <Routes>
            <Route path="/" element={<ButtonForm />} />
            <Route path='/modalone' element={<ButtonModalOne />}/>
            <Route path='/modalTwo' element={<ButtonModalTwo />} />
            </Routes>
        </div>
        </Router>
    )
};

export default App