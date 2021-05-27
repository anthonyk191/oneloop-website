import React, { useState, useEffect } from 'react';

function Slideshow() {

    // changes images once they're available
    const Images = [
        'https://placekitten.com/200/400',
        'https://placekitten.com/505/400',
        'https://placekitten.com/510/400',
        'https://placekitten.com/520/400'
    ];

    const [ imageOffset, setImageOffset ] = useState(0);

    const Dots = Images.map((image, offset) => (
        <span key={ offset } className={ offset === imageOffset ? 'active' : '' } onClick={ () => setImageOffset(offset) }>
        </span>
    ));

    useEffect(() => {
        const timer = setTimeout(() => setImageOffset((imageOffset + 1) % Images.length), 3000);

        return function cleanup() {
            clearTimeout(timer);
        }
    })

    return (
        <div className="slideshow">
            <div className="frame-wrapper">                
                <div key={ imageOffset } 
                    className="ss-image"
                    style={{ backgroundImage: `url(${Images[imageOffset]})` }}></div>
                <div key={ (imageOffset - 1 + Images.length) % Images.length } 
                    className="ss-image ss-idle" 
                    style={{ backgroundImage: `url(${Images[(imageOffset - 1 + Images.length) % Images.length]})` }}></div>
            </div>
            { Dots }
        </div>
    );
}

export default Slideshow;