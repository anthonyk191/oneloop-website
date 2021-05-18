import React, { useState, useEffect } from 'react';

function Slideshow() {

    // changes images once they're available
    const Images = [
        'https://placekitten.com/500/400',
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
            <img src={ Images[imageOffset] }/>
            { Dots }
        </div>
    );
}

export default Slideshow;