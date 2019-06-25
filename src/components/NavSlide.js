import React from 'react';

const NavSlide = (props) => (
    <div className="nav nav-slide">
        <li>
            <a href={props.hrefBack}>{props.nameBack}</a>
        </li>
        <li>
            <a href='/'>Main Page</a>
        </li>
        <li>
            <a href={props.hrefNext}>{props.nameNext}</a>
        </li>
    </div>
);

export default NavSlide;