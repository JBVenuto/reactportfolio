import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SiteMap = (props) => (
    <div className="site-map">
        <div className="container">
            <div className="row">
                {/* Links to the main page and its contents */}
                <div className="col-sm-4">
                    <ul>
                        <li>
                            <a href="/reactportfolio">Main Page</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                    </ul>
                </div>
                {/* Links to portfolio pages */}
                <div className="col-sm-4">
                    <ul>
                        <li>
                            <a href="/reactportfolio/#/lights">Find Your Lights</a>
                        </li>
                        <li>
                            <a href="/reactportfolio/#/letseat">Let's Eat</a>
                        </li>
                        <li>
                            <a href="/reactportfolio/#/memory">Art History Memory Game</a>
                        </li>
                        <li>
                            <a href="/reactportfolio/#/artgenerator">Modern Art Generator</a>
                        </li>
                    </ul>
                </div>
                {/* Links to linkedIn and GitHub */}
                <div className="col-sm-4">
                    <a href="https://www.linkedin.com/in/joseph-venuto-0714a5162/" rel="noopener noreferrer" target="_blank">
                        <FaLinkedin className="foot-icon" />
                    </a>
                    <a href="https://github.com/JBVenuto" rel="noopener noreferrer" target="_blank">
                        <FaGithub className="foot-icon" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default SiteMap;