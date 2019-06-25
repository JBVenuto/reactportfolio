import React from 'react';

const NavSlide = (props) => (
    <div className="nav nav-fill nav-slide">
        <li className="nav-item">
            <a href={props.hrefBack}>{props.nameBack}</a>
        </li>
        <li className="nav-item">
            <a href='/'>Main Page</a>
        </li>
        <li className="nav-item">
            <a href={props.hrefNext}>{props.nameNext}</a>
        </li>
    </div>
);

export default NavSlide;