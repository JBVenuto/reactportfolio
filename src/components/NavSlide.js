import React from 'react';
import { Link } from 'react-router-dom';

const NavSlide = (props) => (
    <div className="nav nav-fill nav-slide">
        <li className="nav-item">
            <Link to={props.hrefBack}>{props.nameBack}</Link>
        </li>
        <li className="nav-item">
            <Link to='/'>Main Page</Link>
        </li>
        <li className="nav-item">
            <Link to={props.hrefNext}>{props.nameNext}</Link>
        </li>
    </div>
);

export default NavSlide;