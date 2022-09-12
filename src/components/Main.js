import React from 'react'
//css
import './Main.css'
import me from '../images/me.jpg'

function Main() {
  return (
    <div className='main'>
        <article>
            <section className='hello'>
                <p>Hello, I'm an indie app developer based in Japan!</p>
            </section>

            <section className="who">
                <div className='me-text'>
                    <h2>Takuya Matsuyama</h2>
                    <p>Digital Craftsman ( Artist / Developer / Designer )</p>
                </div>
                <div className="me-image">
                    <img src={me} alt="me" />
                </div>
            </section>

            <section className="work">
                <h3>Work</h3>
                <p>Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop. He publishes content for marketing his products and his YouTube channel called "Dev as Life" has more than 100k subscribers.</p>
                <a href="#" className="article-button">
                    My portfolio<span>&gt;</span>
                </a>
            </section>
        </article>
    </div>
  )
}

export default Main