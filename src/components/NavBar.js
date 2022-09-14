import React from 'react'
import './NavBar.css'

function NavBar( { dark, setDark } ) {
    return (
        <div className='nav-bar'>
            <div className='wrap'>
                <div className="nav-bar-left">
                    <h1>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                            <path d="M6.25 9a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 016.25 9zm4.25.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"></path><path fill-rule="evenodd" d="M7.86 1.77c.05.053.097.107.14.164.043-.057.09-.111.14-.164.681-.731 1.737-.9 2.943-.765 1.23.136 2.145.527 2.724 1.26.566.716.693 1.614.693 2.485 0 .572-.053 1.147-.254 1.655l.168.838.066.033A2.75 2.75 0 0116 9.736V11c0 .24-.086.438-.156.567a2.173 2.173 0 01-.259.366c-.18.21-.404.413-.605.58a10.373 10.373 0 01-.792.597l-.015.01-.006.004-.028.018a8.832 8.832 0 01-.456.281c-.307.177-.749.41-1.296.642C11.296 14.528 9.756 15 8 15c-1.756 0-3.296-.472-4.387-.935a12.06 12.06 0 01-1.296-.641 8.815 8.815 0 01-.456-.281l-.028-.02-.006-.003-.015-.01a7.077 7.077 0 01-.235-.166c-.15-.108-.352-.26-.557-.43a5.19 5.19 0 01-.605-.58 2.167 2.167 0 01-.259-.367A1.19 1.19 0 010 11V9.736a2.75 2.75 0 011.52-2.46l.067-.033.167-.838C1.553 5.897 1.5 5.322 1.5 4.75c0-.87.127-1.77.693-2.485.579-.733 1.494-1.124 2.724-1.26 1.206-.134 2.262.034 2.944.765zM3.024 7.709L3 7.824v4.261c.02.013.043.025.065.038.264.152.65.356 1.134.562.972.412 2.307.815 3.801.815 1.494 0 2.83-.403 3.8-.815a10.6 10.6 0 001.2-.6v-4.26l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.06-.328-2.71-.991A3.223 3.223 0 018 6.266c-.144.269-.321.52-.54.743C6.81 7.672 5.896 8 4.75 8c-.652 0-1.237-.082-1.727-.291zm3.741-4.916c-.193-.207-.637-.414-1.681-.298-1.02.114-1.48.404-1.713.7-.247.313-.37.79-.37 1.555 0 .792.129 1.17.308 1.37.162.181.52.38 1.442.38.854 0 1.339-.236 1.638-.54.315-.323.527-.827.618-1.553.117-.936-.038-1.396-.242-1.614zm2.472 0c.193-.207.637-.414 1.681-.298 1.02.114 1.48.404 1.713.7.247.313.37.79.37 1.555 0 .792-.129 1.17-.308 1.37-.162.181-.52.38-1.442.38-.854 0-1.339-.236-1.638-.54-.315-.323-.527-.827-.618-1.553-.117-.936.038-1.396.242-1.614z"></path>
                        </svg>
                        <p>Takuya Matsuyama</p>
                    </h1>
                </div>
                <div className="nav-bar-center">
                    <p>center</p>
                </div>
                <div className="nav-bar-right">
                    { dark ? (
                        <button className='light' onClick={() => {setDark(false)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        </button>
                    ) : (
                        <button className='dark' onClick={() => {setDark(true)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        </button>
                    ) }
                    
                    
                    <button className='menu'>
                        <svg class="svg-icon" viewBox="0 0 20 20">
						    <path d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
						</svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar