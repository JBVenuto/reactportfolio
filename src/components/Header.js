import React from 'react';

const Header = (props) => (
    <div className="container">
        <div className="row header">
            <div className="col-sm-1"></div>
            <div className="col-sm-4 name-title">
                <h1>Joseph Venuto</h1><hr></hr>
                <h2>Web Developer</h2>
            </div>
            <div className="col-sm-1"></div>

            <div className="col-sm-6 logo">
                <img
                    className="logo-img"
                    src={props.src}
                    alt="V Logo"
                ></img>
            </div>
        </div>
    </div>
);

export default Header;