import React from 'react';

const PortfoDesc = (props) => (
    <div className="col-lg-6">
        {props.title}
        <br></br>
        {props.description}
    </div>
);

export default PortfoDesc;