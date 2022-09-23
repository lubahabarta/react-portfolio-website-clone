import './App.css';
//components
import NavBar from './components/NavBar';
import Main from './components/Main';
import Works from './components/Works'
import Banner from './components/Banner'
// react-router
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <div className='app'>
            <Router>
                <NavBar />

                <Banner />

                <Routes>
                    <Route path='/' element={ <Main /> }/>
                    <Route path='/portfolio' element={ <Works /> }/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
