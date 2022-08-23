import React, { useRef, useState, useEffect } from 'react';
import '../assets/stylesheets/splash.scss'
import Splash0Left from './svgs/splash-0-left.jsx'
import Splash0Right from './svgs/splash-0-right.jsx'
import Splash1 from './svgs/splash-1.jsx'
import Splash2 from './svgs/splash-2.jsx'
import Splash3 from './svgs/splash-3.jsx'
import Splash4 from './svgs/splash-4.jsx'
import Splash5 from './svgs/splash-5.jsx'

function Splash() {
    const [scrollTop, setScrollTop] = useState(0);
    const [languageIndex, setLanguageIndex] = useState(0);
    
    const languages = [
        'React.js',
        'Redux',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Node.js',
        'Ruby',
        'Rails 5',
        'PostGreSQL',
        'Express',
        'MongoDB'
    ]

    function useInterval(cb, delay){
        const savedCb = useRef();

        useEffect(() => {
            savedCb.current = cb;
        }, [cb])

        useEffect(() => {
            function tick() {
              savedCb.current();
            }
            if (delay !== null) {
              let id = setInterval(tick, delay);
              return () => clearInterval(id);
            }
        }, [delay]);
    }

    useInterval(() => {
        if (languageIndex !== languages.length - 1){
            setLanguageIndex(languageIndex + 1);
        } else {
            setLanguageIndex(0);
        }
      }, 1000);
  
    
    useEffect(() => {

        let splash5 = document.getElementById('splash-5')
        let splash4 = document.getElementById('splash-4')
        let splash3 = document.getElementById('splash-3')
        let splash2 = document.getElementById('splash-2')
        let splash1 = document.getElementById('splash-1')
        let splash0left = document.getElementById('splash-0-left')
        let splash0right = document.getElementById('splash-0-right')
        let splashCircle = document.getElementById('splash-circle')
        let splashBackground = document.getElementById('splash-background')
        let splashStars = document.getElementById('splash-stars')

        document.addEventListener('scroll', function(){
            let scrollValue = window.scrollY;
            setScrollTop(scrollValue)
            if (scrollTop < 1000){
                splash5.style.left = '-' + scrollTop * 0.05 + 'px';
                splash5.style.top = 10 + scrollTop * 0.25 + 'px';
                splash4.style.top = 10 + scrollTop * 0.35 + 'px';
                splash4.style.left = scrollTop * 0.1 + 'px';
                splash3.style.left = scrollTop * 0.1 + 'px';
                splash3.style.top = -65 + scrollTop * .25 + 'px';
                splash2.style.left = '-' + scrollTop * 0.15 + 'px';
                splash2.style.top = 10 + scrollTop * .3 + 'px';
                splash0left.style.left = '-' + scrollTop * 0.5 + 'px';
                splash0left.style.top = -10 - scrollTop * 0.2 + 'px';
                splash0right.style.left = scrollTop * 0.5 + 'px';
                splash0right.style.top = -10 - scrollTop * 0.2 + 'px';
                splashCircle.style.top = 135 + scrollTop * 2 + 'px';
                splashBackground.style.left = '-' + scrollTop * 0.3 + '%';
                splashStars.style.left = -900 - scrollTop * 3 + 'px';
                splashStars.style.top = '-' + scrollTop * 0.5 + 'px';
            }
        })
    }, [window.scrollY])

    return (
        <>
            <div id='splash-background' className='splash-background'/>
            <div id='splash-stars' className='splash-stars'>
                <img src='https://tomleslieli-portfolio.s3.amazonaws.com/splash-stars.png' alt='splash-stars'/>
            </div>
            <div className='splash-center-container'>
                <div id='splash-circle' className='splash-circle'>
                    <h5>[scroll to continue]</h5>
                </div>
                <div className='splash-text'>
                    <h1>Tom Leslie Li</h1>
                    <div className='languages'>
                        <h4>{languages[languageIndex]}</h4>
                    </div>
                </div>   
            </div>       
            <div id='splash-5' className='splash-asset'>
                <Splash5/>
            </div>
            <div id='splash-4'className='splash-asset'>
                <Splash4/>
            </div>
            <div id='splash-3'className='splash-asset'>
                <Splash3/>
            </div>
            <div id='splash-2'className='splash-asset'>
                <Splash2/>
            </div>
            <div id='splash-1' className='splash-asset-border'>
                <Splash1/>
            </div>
            <div id='splash-0-right' className='splash-asset'>
                <Splash0Right/>
            </div>
            <div id='splash-0-left'className='splash-asset'>
                <Splash0Left/>
            </div>
            <div className='splash-birds'>
                <img src='https://tomleslieli-portfolio.s3.amazonaws.com/splash-birds.gif' alt='splash-birds'/>
            </div>
        </>
    )
};

export default Splash;