import React from 'react';
import PreloaderImg from '../assets/preloading.png';
const Preloader = () =>
    ( < div className = "App container" >
        <
        h1 Demographic of Players > < /h1> <
        p className = "lead" >
        Since 2009 Leauge of Legends has been ramping up popularity.Organically created it has a strong diverse player base. <
        span > The most diverse Country is North America.With blah blah % < /span> < /
        p > <
        img src = {
            PreloaderImg
        }
        style = {
            {
                width: '80%'
            }
        }
        role = "presentation" / >
        <
        h2 className = "text-center" > Loading data... < /h2> < /
        div >
    );

export default Preloader;
