import React, { useState, useEffect } from 'react';
import '../assets/stylesheets/hobbies.scss';
import Blue from './svgs/blue.jsx';
import DarkRed from './svgs/dark-red.jsx';
import LightRed from './svgs/light-red.jsx';
import ItemsSnowboard from './svgs/items-snowboard.jsx';
import ItemsClimbing from './svgs/items-climbing.jsx';
import ItemsMusic from './svgs/items-music.jsx';
import ItemsPhotos from './svgs/items-photos.jsx';
import Orange from './svgs/orange.jsx';
import WhiteBottom from './svgs/white-bottom.jsx';
import WhiteTop from './svgs/white-top.jsx';
import WhiteMid from './svgs/white-mid.jsx';

function Hobbies() {

    const [selectedItem, setSelectedItem] = useState(null)

    const itemsSnowboard = document.getElementById('items-snowboard');
    const itemsClimbing = document.getElementById('items-climbing');
    const itemsMusic = document.getElementById('items-music');
    const itemsPhotos = document.getElementById('items-photos');

    useEffect(() => console.log('Hobbies Mounted'), []);

    useEffect(() => {
        if (selectedItem){
            if (selectedItem === 'items-snowboard'){
                const orange = document.getElementById('orange');
                orange.style.opacity = '100%';
                orange.style.display = 'block';
            }
            if (selectedItem === 'items-photos'){
                const whiteTop = document.getElementById('white-top');
                whiteTop.style.opacity = '100%';
                whiteTop.style.display = 'block';
            }
            if (selectedItem === 'items-music'){
                const whiteMid = document.getElementById('white-mid');
                whiteMid.style.opacity = '100%';
                whiteMid.style.display = 'block';
            }
            const currentTarget = document.getElementById(`${selectedItem}`)
            currentTarget.style.opacity = '100%';
            currentTarget.style.display = 'block';
        }
    }, [selectedItem])

    return (
        <>
            <div id='blue' className='hobbies-layer'>
                <Blue/>
            </div>
            <div id='dark-red' className='hobbies-layer'>
                <DarkRed/>
            </div>
            <div id='light-red' className='hobbies-layer'>
                <LightRed/>
            </div>
            <div id='items-snowboard' className='hobbies-layer items'>
                <ItemsSnowboard/>
            </div>
            <div id='items-climbing' className='hobbies-layer items'>
                <ItemsClimbing/>
            </div>
            <div id='items-music' className='hobbies-layer items'>
                <ItemsMusic/>
            </div>
            <div id='items-photos' className='hobbies-layer items'>
                <ItemsPhotos/>
            </div>
            <div id='orange' className='hobbies-layer items'>
                <Orange/>
            </div>
            <div id='white-bottom' className='hobbies-layer'>
                <WhiteBottom/>
            </div>
            <div id='white-top' className='hobbies-layer'>
                <WhiteTop/>
            </div>
            <div id='white-mid' className='hobbies-layer'>
                <WhiteMid/>
            </div>
            <div className='hobbies-right'>
                <div className='hobbies-buttons'>
                <button onClick={() => setSelectedItem('items-photos')}>
                    <i class="fa-solid fa-camera fa-xl"></i>
                </button>
                <button onClick={() => setSelectedItem('items-music')}>
                    <i class="fa-brands fa-soundcloud fa-xl"></i>
                </button>
                <button onClick={() => setSelectedItem('items-climbing')}>
                    <i class="fa-solid fa-mountain fa-xl"></i>
                </button>
                <button onClick={() => setSelectedItem('items-snowboard')}>
                    <i class="fa-solid fa-person-snowboarding fa-xl"></i>
                </button>
                <div className='placeholder'/>
                </div>
                <div className='hobbies-descriptions'>
                    { 
                        selectedItem === null ? <>Hello</> : <></>
                    }
                    { 
                        selectedItem === 'items-photos' ? 
                        <div className='items-item'>
                        </div>
                         : <></>
                    }
                    { 
                        selectedItem === 'items-music' ?
                         <div className='items-item'>
                            <iframe width="80%" 
                                height="400px" 
                                scrolling="no" 
                                frameborder="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1473581347&color=%23ffddd1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                         </div> : <></>
                    }
                    { 
                        selectedItem === 'items-snowboard' ? 
                        <div className='items-item'>
                            Snowboard
                        </div>
                         : <></>
                    }
                    { 
                        selectedItem === 'items-climbing' ? 
                        <div className='items-item'>
                            Climbing
                        </div> : <></>
                    }
                </div>
            </div>
        </>
    )
}

export default Hobbies;