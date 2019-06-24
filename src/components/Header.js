import React from 'react';

const Header = (props) => (
    <div>
        <div className="col-sm-6 name-title">
            <h1>Joseph Venuto</h1><hr></hr>
            <h2>Web Developer</h2>
        </div>
        <div className="col-sm-6 logo">
            <img
                className="logo-img"
                src={props.src}
                alt="V Logo"
            ></img>
        </div>
    </div>
);

export default Header;