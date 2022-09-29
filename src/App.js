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
                    <Route exact path='/' element={ <Main /> }/>
                    <Route path='/portfolio' element={ <Works /> }/>
                    <Route path='/*' element={ <a href='/'>404 Page not found</a> }/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
