import React from 'react';

const PortfoDesc = (props) => (
    <div className="col-sm-6 port-desc">
        {/* <div className="row"></div> */}
        <span className="testDiv">
            {props.title}
            <br></br>
            {props.description}
        </span>
        {/* <div className="row"></div> */}
    </div>
);

export default PortfoDesc;