import React from 'react';

const PortfoDesc = (props) => (
    <div className="cell">
        {props.title}
        <br></br>
        {props.description}
    </div>
);

export default PortfoDesc;