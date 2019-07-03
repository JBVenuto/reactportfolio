import React from 'react';

const SlideLinks = (props) => (
    <div className="app-links justify-content-center">
        <a href={props.liveHref} target="_blank" rel="noopener noreferrer">Live Site</a>
        <a href={props.gitHubHref} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </div>
);

export default SlideLinks;