import React from 'react';

const Nav = () => (
    <div className='nav justify-content-end'>
        {/* <div className="col-6"></div> */}
        <li className="nav-item">
            <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
            <a href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
            <a href="#about">About</a>
        </li>
        <li className="nav-item">
            <a href="https://www.linkedin.com/in/joseph-venuto-0714a5162/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        </li>
        <li className="nav-item">
            <a href="https://github.com/JBVenuto" rel="noopener noreferrer" target="_blank">GitHub</a>
        </li>
    </div>
);

export default Nav;