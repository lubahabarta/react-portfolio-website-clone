import React from 'react'
//css
import './Works.css'
//images
import art from '../images/art.svg'
import img from '../images/test.png'
//components
import Footer from './Footer'

const Works = () => {
    return (
        <div className='works'>
            <main>
                <div className="main-wrap">
                    <div className='art'>
                        <img src={art} alt="art" />
                    </div>
                </div>

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
                <Footer />
            </main>
        </div>
    )
}

export default Works