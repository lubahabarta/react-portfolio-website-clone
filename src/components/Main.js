import React, { useState, useEffect, useRef } from 'react'
//animated background
import BIRDS from 'vanta/dist/vanta.birds.min'
//css
import './Main.css'
import me from '../images/me.jpg'

function Main() {

    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(BIRDS({
            el: vantaRef.current,
            backgroundAlpha: 0,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 400.00,
            minWidth: 400.00,
            scale: 1.00,
            scaleMobile: 1.00,
            colorMode: "variance",
            birdSize: 3,
            speedLimit: 3.00,
            separation: 79.00,
            alignment: 50.00,
            cohesion: 48.00,
            quantity: 2.00
          }))
        }
        return () => {
          if (vantaEffect) vantaEffect.destroy();
        }
      }, [vantaEffect]);

    return (
        <div className='main'>
            <div className="vanta">
                <div ref={vantaRef}></div>
            </div>

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
                    <p><a href="#">Takuya</a> is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop. He publishes content for marketing his products and his YouTube channel called "Dev as Life" has more than 100k subscribers.</p>
                    <div className="article-button">
                        <a href="#">
                            My portfolio<span>&gt;</span>
                        </a>
                    </div>
                </section>

                <section className="bio">
                    <h3>Bio</h3>
                    <p><span>1984</span>Born in Osaka (大阪), Japan.</p>
                    <p><span>2010</span>Completed the Master's Program in the Graduate School of Information Science at Nara Institute of Science and Technology (奈良先端科学技術大学院大学情報科学研究科修士課程)</p>
                    <p><span>2010</span>Worked at Yahoo! Japan (ヤフー株式会社入社)</p>
                    <p><span>2012 to present</span>Working as a freelancer</p>
                </section>

                <section className='hobby'>
                    <h3>I &hearts;</h3>
                    <p>Art, Music, Drawing, Playing Drums, Photography, Leica, Machine Learning</p>
                </section>

                <section className='on-the-web'>
                    <h3>On the web</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <svg viewBox="0 0 512 512">
                                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                                </svg>
                                <p>@craftzdog</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg viewBox="0 0 512 512">
                                    <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                                </svg>
                                <p>@inkdrop_app (English)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg viewBox="0 0 512 512">
                                    <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                                </svg>
                                <p>@craftzdog (日本語)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg viewBox="0 0 512 512">
                                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                                </svg>
                                <p>@craftzdog</p>
                            </a>
                        </li>
                    </ul>
                </section>
                
            </article>
        </div>
    )
}

export default Main