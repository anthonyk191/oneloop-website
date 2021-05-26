import React, { useState, useEffect } from 'react';

// preload images so page doesn't jitter when slideshow changes images
// might remove this once we actually have images?
function Preloaded(props) {
    return (
        <div style={{ display: 'none' }}>
            { props.images.map((img, i) => (<img key={ i } src={ img } alt=""/>)) }
        </div>
    );
}

function Dots(props) {
    return (
        <React.Fragment>
            {
                props.images.map((_, offset) => (
                    <span key={ offset } className={ offset === props.imageOffset ? 'active' : '' } onClick={ () => props.setImageOffset(offset) }>
                    </span>
                ))
            }
        </React.Fragment>
    )
}

function Slideshow() {

    // changes images once they're available
    const Images = [
        'https://placekitten.com/500/200',
        'https://placekitten.com/500/201',
        'https://placekitten.com/500/202',
        'https://placekitten.com/500/203',
        'https://placekitten.com/500/204',
        'https://placekitten.com/500/205',
        'https://placekitten.com/500/206'
    ];

    const [ imageOffset, setImageOffset ] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setImageOffset((imageOffset + 1) % Images.length), 3000);

        return function cleanup() {
            clearTimeout(timer);
        }
    })

    return (
        <div className="slideshow">
            <div className="frame-wrapper">                
                <img key={ imageOffset } 
                    className="ss-image"
                    src={ Images[imageOffset] } />
                <img key={ (imageOffset - 1 + Images.length) % Images.length } 
                    className="ss-image ss-idle" 
                    src={ Images[(imageOffset - 1 + Images.length) % Images.length]} />
            </div>
            <Dots imageOffset={ imageOffset } setImageOffset={ setImageOffset } images={ Images } />
            <Preloaded images={ Images } />
        </div>
    );
}

export default Slideshow;