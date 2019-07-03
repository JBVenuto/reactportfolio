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
                            <a href="/">Main Page</a>
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
                            <a href="/lights">Find Your Lights</a>
                        </li>
                        <li>
                            <a href="/letseat">Let's Eat</a>
                        </li>
                        <li>
                            <a href="/memory">Art History Memory Game</a>
                        </li>
                        <li>
                            <a href="/artgenerator">Modern Art Generator</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default SiteMap;