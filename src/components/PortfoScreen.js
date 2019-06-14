import React from 'react';

const PortfoScreen = (props) => (
    <div className="col-lg-6">
        <img
            className="screenshot"
            src={props.src}
            alt={props.alt}
        ></img>
    </div>
);

export default PortfoScreen;