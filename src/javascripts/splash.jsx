import React, { useRef, useState, useEffect } from 'react';
import '../assets/stylesheets/splash.scss'

function Splash() {
    const [scrollTop, setScrollTop] = useState(0);
    const [languageIndex, setLanguageIndex] = useState(0);

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
      document.addEventListener('scroll', function(){
        let scrollValue = window.scrollY;
        setScrollTop(scrollValue)
        splash5.style.left = '-' + scrollValue * 0.05 + 'px';
        splash5.style.top = 10 + scrollValue * 0.25 + 'px';
        splash4.style.top = 10 + scrollValue * 0.35 + 'px';
        splash4.style.left = scrollValue * 0.1 + 'px';
        splash3.style.left = scrollValue * 0.1 + 'px';
        splash3.style.top = -65 + scrollValue * .25 + 'px';
        splash2.style.left = '-' + scrollValue * 0.15 + 'px';
        splash2.style.top = 10 + scrollValue * .3 + 'px';
        splash1.style.width = scrollValue + 'px';
        splash0left.style.left = '-' + scrollValue * 0.5 + 'px';
        splash0left.style.top = -10 - scrollValue * 0.2 + 'px';
        splash0right.style.left = scrollValue * 0.5 + 'px';
        splash0right.style.top = -10 - scrollValue * 0.2 + 'px';
        splashCircle.style.top = 375 + scrollValue * 2 + 'px';
        splashBackground.style.top = '-' + scrollValue * 3 + 'px';
        splashStars.style.left = -600 - scrollValue * 3 + 'px';
        splashStars.style.top = 200 - scrollValue * 0.5 + 'px';
      })
    }, [scrollTop])

    return (
        <>
            <div id='splash-background' className='splash-background'/>
            <div id='splash-stars' className='splash-stars'>
                <img src='https://tomleslieli-portfolio.s3.amazonaws.com/splash-stars.png' alt='splash-stars'/>
            </div>
            <div id='splash-circle' className='splash-circle'>
                <h5>scroll to continue</h5>
            </div>
            <div className='splash-text'>
                <h1>Tom Leslie Li</h1>
                <div className='languages'>
                    <h4>{languages[languageIndex]}</h4>
                </div>
            </div>          
            <div id='splash-5' className='splash-asset'>
                <img src='https://tomleslieli-portfolio.s3.amazonaws.com/splash-5.png' alt='splash-5'/>
            </div>
            <div id='splash-4'className='splash-asset'>
                <img src='https://tomleslieli-portfolio.s3.amazonaws.com/splash-4.png' alt='splash-4'/>
            </div>
            <div id='splash-3'className='splash-asset'>
                <img src='https://tomleslieli-portfolio.s3.amazonaws.com/splash-3.png' alt='splash-3'/>
            </div>
            <div id='splash-2'className='splash-asset'>
                <img src='https://tomleslieli-portfolio.s3.amazonaws.com/splash-2.png' alt='splash-2'/>
            </div>
            <div id='splash-1' className='splash-asset-border'>
                <img src='https://tomleslieli-portfolio.s3.amazonaws.com/splash-1.png' alt='splash-1'/>
            </div>
            <div id='splash-0-right' className='splash-asset'>
                <img src='https://tomleslieli-portfolio.s3.amazonaws.com/splash-0-right.png' alt='splash-0-right'/>
            </div>
            <div id='splash-0-left'className='splash-asset'>
                <img src='https://tomleslieli-portfolio.s3.amazonaws.com/splash-0-left.png' alt='splash-0-left'/>
            </div>
            <div className='splash-birds'>
                <img src='https://tomleslieli-portfolio.s3.amazonaws.com/splash-birds.gif' alt='splash-birds'/>
            </div>
        </>
    )
};

export default Splash;