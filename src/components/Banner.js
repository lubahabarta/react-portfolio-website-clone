import React from 'react'
//css
import './Banner.css'
//art
import art from '../images/arttt.svg'

const Banner = () => {
    return (
        <div className='banner'>
            <main>
                <div className="main-wrap">
                    <div className='art'>
                        <img src={art} alt="art" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Banner