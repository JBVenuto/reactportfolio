import React from 'react';

const PortfoScreen = (props) => (
    <div className="cell">
        <img
            src={props.src}
            alt={props.alt}
        ></img>
    </div>
);

export default PortfoScreen;