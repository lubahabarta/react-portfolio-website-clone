import React, { useState, useEffect, useRef } from 'react'
//css
import './Works.css'
//images
import img from '../images/test.png'
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
                                            <a href="#">
                                                <img src={img} alt="img" />
                                                <h4>Inkdrop</h4>
                                                <p>A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support</p>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={img} alt="img" />
                                                <h4>walknote</h4>
                                                <p>Music recommendation app for iOS</p>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={img} alt="img" />
                                                <h4>Inkdrop</h4>
                                                <p>A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support</p>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#">
                                                <img src={img} alt="img" />
                                                <h4>walknote</h4>
                                                <p>Music recommendation app for iOS</p>
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