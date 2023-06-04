import React, { useState, useEffect, useRef } from 'react'
//css
import './Works.css'
//images
import cookieClicker from '../images/cookie-clicker.jpg'
import listApp from '../images/list-app.jpg'
import infoApp from '../images/info-app.jpg'
import timer from '../images/timer.png'
import firebase from '../images/firebase.jpg'
//components
import Footer from './Footer'
//transition
import { CSSTransition } from 'react-transition-group'

const Works = () => {

    const [loaded, setLoaded] = useState(false);
    const mainRef = useRef(null);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 500);
    }, []);

    return (
        <div className='works'>

            <main>

                <CSSTransition nodeRef={mainRef} in={loaded} timeout={500} classNames='content-transition'>
                    <div ref={mainRef}>
                        {loaded && (
                            <div className="main-wrap">
                                <div className="portfolio">

                                    <h3>Portfolio</h3>

                                    <ul>
                                        <li>
                                            <a href="https://luba-react-cookie-clicker.netlify.app/" target='blank'>
                                                <img src={cookieClicker} alt="cookie clicker image" />
                                                <h4>react-cookie-clicker</h4>
                                                <p>Základní práce se statem v Reactu.</p>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://luba-react-list-app.netlify.app/" target='blank'>
                                                <img src={listApp} alt="list app image" />
                                                <h4>react-list-app</h4>
                                                <p>Input v Reactu.</p>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://luba-react-tsc-info-app.netlify.app/" target='blank'>
                                                <img src={infoApp} alt="info app image" />
                                                <h4>react-tsc-info-app</h4>
                                                <p>Na této aplikaci jsem si vyzkoušel trochu TypeScriptu a data fetch.</p>
                                            </a>
                                        </li>

                                        {/* <li>
                                            <a href="https://luba-react-tsc-timer.netlify.app/" target='blank'>
                                                <img src={timer} alt="timer app image" />
                                                <h4>react-tsc-timer</h4>
                                                <p>Nedokončený timer v Reactu a TypeScriptu.</p>
                                            </a>
                                        </li> */}

                                        <li>
                                            <a href="https://luba-react-firebase.netlify.app/" target='blank'>
                                                <img src={firebase} alt="firebase app image" />
                                                <h4>react-firebase</h4>
                                                <p>Tady se učím firebase</p>
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        )}
                    </div>
                </CSSTransition>
                
                {loaded && <Footer />}
                
            </main>
        </div>
    )
}

export default Works