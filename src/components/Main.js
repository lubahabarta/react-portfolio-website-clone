import React, { useState, useEffect, useRef } from 'react'
//components
import Footer from './Footer.js'
//css
import './Main.css'
//images
import me from '../images/Stuzkovani22.png'
//link
import { Link } from 'react-router-dom'
//transition
import { CSSTransition } from 'react-transition-group'

function Main() {

    const [skills, setSkills] = useState([
        { id: 1, skill: 'html', description: 'Znám základní elementy, ne však moc do hloubky.' },
        { id: 2, skill: 'css', description: 'Jsem schopen vytvořit responzivní web (Flex, Grid, @media screen...)'},
        { id: 3, skill: 'es6+', description: 'Moje nejoblíbenější technologie. \u2665'},
        { id: 4, skill: 'React', description: 'V Reactu se pohybuju zatím asi jen 2 měsíce.'},
        { id: 5, skill: '( TypeScript )', description: ''},
        { id: 6, skill: '( Tailwindcss )', description: ''},
        { id: 7, skill: 'Photoshop', description: ''},
        { id: 8, skill: 'Illustrator', description: ''}
    ]);

    const [loaded, setLoaded] = useState(false);
    const helloRef = useRef(null);
    const articleRef = useRef(null);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 500);
    }, []);

    return (
        <div className='main'>
        
            <main>

                <CSSTransition nodeRef={helloRef} in={loaded} timeout={500} classNames='hello-transition'>
                    <div ref={helloRef}>
                        {loaded && (
                            <div className='main-wrap'>
                                <div className='hello'>
                                    <p>Ahoj, vítám tě ve svém portfoliu.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </CSSTransition>

                <CSSTransition nodeRef={articleRef} in={loaded} timeout={500} classNames='content-transition'>
                    <div ref={articleRef}>
                        {loaded && (
                            <article>
                                <section className="who">
                                    <div className='me-text'>
                                        <h2>Lubos Habarta</h2>
                                        <p>( Frontend newbie / Junior )</p>
                                    </div>
                                    <div className="me-image">
                                        <img src={me} alt="me" />
                                    </div>
                                </section>

                                <section className="work">
                                    <h3>O mně &#128522;</h3>
                                    <p>Moje první zkušenost s webovými aplikacemi byla asi v šesté třídě na základní škole. S kamarády jsme v dev tools přepisovali texty webových stránek a mysleli jsme si, jací jsme hackeři. Do html a css mě uvedl youtuber <a href='https://www.youtube.com/channel/UC01guyOZpf40pUopBvdPwsg' target='blank'>Yablko</a> někdy na konci deváté třídy. A jelikož jsem se dostal na IT <a href='https://www.vsps-su.cz/' target='blank'>střední školu</a> do Šumperka, připadalo mi to jako dobrý nápad. V Šumperku začalo mé nadšení pro webové technologie upadat. Učitel nám ukazoval jak se psaly weby před dvaceti lety, a když jsem psal ES6 kód, tak jsem dostal vynadáno &#128517;. Místo zaměření na weby jsem si tedy vybral programování a algoritmy (C#). Od toho se také odvíjela má maturitní práce v Unity. Odmaturoval jsem s vyznamenáním a nevěděl, co bych chtěl dělat. Začal jsem se znovu rozvíjet v oblasti webových technologií, které mě teď naplňují víc, než kdy dříve. Zároveň jsem se dostal na <a href='https://studuj.upce.cz/obor/fes-digitalni-podnikani-bakalarsky-prezencni-cestina' target='blank'>univerzitu</a> do Pardubic, kde jsem teď v prváku a říkám si co tu vlastně dělám...</p>
                                    <div className="article-button">
                                        <Link to='/portfolio'>
                                            Portfolio<span>&gt;</span>
                                        </Link>
                                    </div>
                                </section>

                                <section className='hobby'>
                                    <h3>Hobby &#127912;</h3>
                                    <p>Programování, Cestování, Filmy, Jídlo, Fitness, Fotbal, Volejbal, 24/7 Chill</p>
                                </section>

                                {/* <section className='like'>
                                    <h3>I &hearts;</h3>
                                    <p>Art, Music, Drawing, Playing Drums, Photography, Leica, Machine Learning</p>
                                </section> */}

                                <section className="skills">
                                    <h3>Skills &#128187;</h3>
                                    {/* <p><span>html</span>Znám základní elementy, ne však moc do hloubky.</p>
                                    <p><span>css</span>Jsem schopen vytvořit responzivní web (Flex, Grid, @media screen...)</p>
                                    <p><span>es6+</span>Moje nejoblíbenější technologie. &hearts;</p>
                                    <p><span>React</span>V Reactu se pohybuju zatím asi jen 2 měsíce.</p>
                                    <p><span>( TypeScript )</span></p>
                                    <p><span>( Tailwindcss )</span></p>
                                    <p><span>C#</span>Ze Střední školy jsem si odnesl základy OOP.</p>
                                    <p><span>Photoshop</span></p>
                                    <p><span>Illustrator</span></p> */}

                                    { skills.map(skill => (
                                        <div key={skill.id}>
                                            <span>{skill.skill}</span><p>{skill.description}</p>
                                        </div>
                                    ))}
                                </section>

                                <section className='on-the-web'>
                                    <h3>Sítě &#127757;</h3>
                                    <ul>
                                        <li>
                                            <a href="https://github.com/lubahabarta" target="blank">
                                                <svg viewBox="0 0 512 512">
                                                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                                                </svg>
                                                <p>@lubahabarta</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/lubahabarta" target="blank">
                                                <svg viewBox="0 0 512 512">
                                                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                                                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                                                </svg>
                                                <p>@lubahabarta</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=100015351009140" target="blank">
                                                <svg viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"/>
                                                </svg>
                                                <p>@Luba Habarta</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/LubaHabarta" target="blank">
                                                <svg viewBox="0 0 512 512">
                                                    <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                                                </svg>
                                                <p>@LubaHabarta</p>
                                            </a>
                                        </li>
                                    </ul>
                                </section>
                            </article>
                        )}
                    </div>
                </CSSTransition>

                {loaded && <Footer />}
                
            </main>
            
        </div>
    )
}

export default Main