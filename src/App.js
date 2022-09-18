import './App.css';
//components
import NavBar from './components/NavBar.js';
import Main from './components/Main.js';
import Works from './components/Works.js'

function App() {
    return (
        <div className='app'>
            <NavBar />
            {/* <Main /> */}
            <Works />
        </div>
    );
}

export default App;
