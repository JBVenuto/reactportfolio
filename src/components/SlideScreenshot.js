import React from 'react';

const SlideScreenshot = (props) => (
    <div>
        <img className="slide-screenshot" src={props.src} alt={props.alt}></img>
    </div>
);

export default SlideScreenshot;