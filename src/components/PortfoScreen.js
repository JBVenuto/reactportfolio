import React from 'react';

const PortfoScreen = (props) => (
    <div className="col-sm-6 port-screen">
        <img
            className="screenshot"
            src={props.src}
            alt={props.alt}
        ></img>
    </div>
);

export default PortfoScreen;