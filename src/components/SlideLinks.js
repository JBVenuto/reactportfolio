import React from 'react';

const SlideLinks = (props) => (
    <div>
        <a href={props.liveHref}>Live Site</a>
        <a href={props.gitHubHref}>GitHub Repository</a>
    </div>
);

export default SlideLinks;