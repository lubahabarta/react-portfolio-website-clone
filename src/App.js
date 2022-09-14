import './App.css';
import { useEffect, useState } from 'react';
//components
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        const style = document.documentElement.style;

        if (!dark) {
            style.setProperty('--bg-color', 'var(--light-mode-bg-color)');
            style.setProperty('--font-color', 'var(--light-mode-font-color)');
            style.setProperty('--nav-color', 'var(--light-mode-nav-color)');
            style.setProperty('--menu-border-color', 'var(--light-mode-menu-border-color)');
            style.setProperty('--menu-hover-color', 'var(--light-mode-menu-hover-color)');
            style.setProperty('--link-color', 'var(--light-mode-link-color)');
            style.setProperty('--weblink-hover-color', 'var(--light-mode-weblink-hover-color)');
            style.setProperty('--hello-color', 'var(--light-mode-hello-color)');
            style.setProperty('--cyan-color', 'var(--light-mode-cyan-color)');
            style.setProperty('--cyan-darker-color', 'var(--light-mode-cyan-darker-color)');
        } else {
            style.setProperty('--bg-color', 'var(--dark-mode-bg-color)');
            style.setProperty('--font-color', 'var(--dark-mode-font-color)');
            style.setProperty('--nav-color', 'var(--dark-mode-nav-color)');
            style.setProperty('--menu-border-color', 'var(--dark-mode-menu-border-color)');
            style.setProperty('--menu-hover-color', 'var(--dark-mode-menu-hover-color)');
            style.setProperty('--link-color', 'var(--dark-mode-link-color)');
            style.setProperty('--weblink-hover-color', 'var(--dark-mode-weblink-hover-color)');
            style.setProperty('--hello-color', 'var(--dark-mode-hello-color)');
            style.setProperty('--cyan-color', 'var(--dark-mode-cyan-color)');
            style.setProperty('--cyan-darker-color', 'var(--dark-mode-cyan-darker-color)');
        }
    }, [dark]);

    return (
        <div className='app'>
            <NavBar dark={dark} setDark={setDark}/>
            <Main />
            <Footer />
        </div>
    );
}

export default App;
