import React from 'react';

const About = (props) => (
    <div className="row">
        <div className="col-sm-6 about">
            <p>
                I’m a web developer with a background in education. My time in education has given me professional knowledge of the learning process and the skills to adapt this knowledge for efficient self-learning, as well as time management, organization, and leadership skills.
            </p>
            <p>
                I have an enthusiastic approach to solving problems with technology. With countless predefined techniques already available and the ability to creatively solve a problem, I am able to determine the best approach to a problem. I am an effective communicator with experience organizing group projects and have the ability to succeed working in groups or independently.
            </p>
            <p>
                While earning a Web Development Certificate from the University of Central Florida I was formally taught the MERN stack. Along the way I acquired skills in jQuery, Firebase, MySQL, Handle Bars, and countless Node.js packages.
            </p>
        </div>
        <div className="col-sm-6">
            <img
                src={props.src}
                alt="Joseph Venuto"
                className="headshot"
            ></img>
        </div>
    </div>
);

export default About;