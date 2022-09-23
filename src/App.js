import './App.css';
//components
import NavBar from './components/NavBar';
import Main from './components/Main';
import Works from './components/Works'
// react-router
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
//art 
import art from './images/arttt.svg'

function App() {
    return (
        <div className='app'>
            <Router>
                <NavBar />

                    {/* <div className="main-wrap">
                        <div className='art'>
                            <img src={art} alt="art" />
                        </div>
                    </div> */}

                <Routes>
                    <Route path='/' element={ <Main /> }/>
                    <Route path='/portfolio' element={ <Works /> }/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
