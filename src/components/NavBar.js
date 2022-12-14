import React, { useState, useEffect } from 'react'
//css
import './NavBar.css'
//link
import { Link } from 'react-router-dom'

function NavBar() {
    const [dark, setDark] = useState(true);
    const [hiddenMenu, setHiddenMenu] = useState(false);

    useEffect(() => {
        const style = document.documentElement.style;

        if (!dark) {
            style.setProperty('--bg-color', 'var(--light-mode-bg-color)');
            style.setProperty('--font-color', 'var(--light-mode-font-color)');
            style.setProperty('--nav-color', 'var(--light-mode-nav-color)');
            style.setProperty('--menu-border-color', 'var(--light-mode-menu-border-color)');
            style.setProperty('--menu-hover-color', 'var(--light-mode-menu-hover-color)');
            style.setProperty('--hidden-menu-bg-color', 'var(--light-mode-hidden-menu-bg-color)');
            style.setProperty('--hidden-menu-hover-color', 'var(--light-mode-hidden-menu-hover-color)');
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
            style.setProperty('--hidden-menu-bg-color', 'var(--dark-mode-hidden-menu-bg-color)');
            style.setProperty('--hidden-menu-hover-color', 'var(--dark-mode-hidden-menu-hover-color)');
            style.setProperty('--link-color', 'var(--dark-mode-link-color)');
            style.setProperty('--weblink-hover-color', 'var(--dark-mode-weblink-hover-color)');
            style.setProperty('--hello-color', 'var(--dark-mode-hello-color)');
            style.setProperty('--cyan-color', 'var(--dark-mode-cyan-color)');
            style.setProperty('--cyan-darker-color', 'var(--dark-mode-cyan-darker-color)');
        }
    }, [dark]);
    
    return (
        <div className='nav-bar'>
            <div className='wrap'>
                <div className="nav-bar-left">
                    <Link to='/'>
                        <h1>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                <path d="M6.25 9a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 016.25 9zm4.25.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"></path>
                                <path fillRule="evenodd" d="M7.86 1.77c.05.053.097.107.14.164.043-.057.09-.111.14-.164.681-.731 1.737-.9 2.943-.765 1.23.136 2.145.527 2.724 1.26.566.716.693 1.614.693 2.485 0 .572-.053 1.147-.254 1.655l.168.838.066.033A2.75 2.75 0 0116 9.736V11c0 .24-.086.438-.156.567a2.173 2.173 0 01-.259.366c-.18.21-.404.413-.605.58a10.373 10.373 0 01-.792.597l-.015.01-.006.004-.028.018a8.832 8.832 0 01-.456.281c-.307.177-.749.41-1.296.642C11.296 14.528 9.756 15 8 15c-1.756 0-3.296-.472-4.387-.935a12.06 12.06 0 01-1.296-.641 8.815 8.815 0 01-.456-.281l-.028-.02-.006-.003-.015-.01a7.077 7.077 0 01-.235-.166c-.15-.108-.352-.26-.557-.43a5.19 5.19 0 01-.605-.58 2.167 2.167 0 01-.259-.367A1.19 1.19 0 010 11V9.736a2.75 2.75 0 011.52-2.46l.067-.033.167-.838C1.553 5.897 1.5 5.322 1.5 4.75c0-.87.127-1.77.693-2.485.579-.733 1.494-1.124 2.724-1.26 1.206-.134 2.262.034 2.944.765zM3.024 7.709L3 7.824v4.261c.02.013.043.025.065.038.264.152.65.356 1.134.562.972.412 2.307.815 3.801.815 1.494 0 2.83-.403 3.8-.815a10.6 10.6 0 001.2-.6v-4.26l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.06-.328-2.71-.991A3.223 3.223 0 018 6.266c-.144.269-.321.52-.54.743C6.81 7.672 5.896 8 4.75 8c-.652 0-1.237-.082-1.727-.291zm3.741-4.916c-.193-.207-.637-.414-1.681-.298-1.02.114-1.48.404-1.713.7-.247.313-.37.79-.37 1.555 0 .792.129 1.17.308 1.37.162.181.52.38 1.442.38.854 0 1.339-.236 1.638-.54.315-.323.527-.827.618-1.553.117-.936-.038-1.396-.242-1.614zm2.472 0c.193-.207.637-.414 1.681-.298 1.02.114 1.48.404 1.713.7.247.313.37.79.37 1.555 0 .792-.129 1.17-.308 1.37-.162.181-.52.38-1.442.38-.854 0-1.339-.236-1.638-.54-.315-.323-.527-.827-.618-1.553-.117-.936.038-1.396.242-1.614z"></path>
                            </svg> */}
                            <p>Lubos Habarta</p>
                        </h1>
                    </Link>
                </div>
                <div className="nav-bar-center">
                    <ul>
                        <li>
                            <Link to='/portfolio'>Portfolio</Link>
                        </li>
                        <li>
                            <a href="https://github.com/lubahabarta/react-portfolio-website-clone" target="blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                                Source
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav-bar-right">
                    { dark ? (
                        <button className='light' onClick={() => {setDark(state => !state)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        </button>
                    ) : (
                        <button className='dark' onClick={() => setDark(state => !state)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        </button>
                    ) }
                    <button className='menu' onClick={() => setHiddenMenu(state => !state)}>
                        <svg className="svg-icon" viewBox="0 0 20 20">
						    <path d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
						</svg>
                    </button>
                </div>

                { hiddenMenu && (
                    <div className='hidden-menu'>
                        <ul>
                            <li>
                                <Link to="/" onClick={() => setHiddenMenu(state => !state)}>About</Link>
                            </li>
                            <li>
                                <Link to="/portfolio" onClick={() => setHiddenMenu(state => !state)}>Portfolio</Link>
                            </li>
                            <li>
                                <a href="https://github.com/lubahabarta" onClick={() => setHiddenMenu(state => !state)}>View Source</a>
                            </li>
                        </ul>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default NavBar