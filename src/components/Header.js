import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="name__wrap">
            <div className="name-title">
                <h1>Joseph Venuto</h1><hr></hr>
                <h2>Web Developer</h2>
            </div>
        </div>

        <div className="logo">
            <img
                className="logo-img"
                src={props.src}
                alt="V Logo"
            ></img>
        </div>
    </div>
);

export default Header;