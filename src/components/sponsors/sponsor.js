import React, { useEffect, useState } from 'react';
import './sponsors_body.css';

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

function SponsorPopup({ open, onClose, title: Title, description: Description, url: URL }) {
    if (!open) return null
    return (
        <div style={OVERLAY_STYLES}>
            <div className="sponsorPopUp">
                <button onClick={onClose}>&#x2715;</button>
                <p className="Title">{Title}</p>
                <p>{Description}</p>
                <a href={URL}>{URL}</a>
            </div>
        </div>
    )
}

export default function SponsorModal({ img: Img, title: Title, description: Description, url: URL }) {
    const [isOpen, setisOpen] = useState(false)
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
            <button
                className={isShown ? "sponsorHover" : "sponsor"}
                onClick={() => setisOpen(true)}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                <div>
                    <img src={Img} />
                    {/* {isShown && (
                        <div>Click to learn more!</div>
                    )} */}
                </div>
            </button>
            <SponsorPopup
                open={isOpen}
                onClose={() => setisOpen(false)}
                title={Title}
                description={Description}
                url={URL}
            />
        </div>
    )
}