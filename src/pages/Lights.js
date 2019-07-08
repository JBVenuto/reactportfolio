import React, { Component } from 'react';
import './slide.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SlideScreenshot from '../components/SlideScreenshot';
import SlideLinks from '../components/SlideLinks';
import SiteMap from '../components/SiteMap';
import screenshot from '../images/gifs/lightsdesk.gif';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class Lights extends Component {
    constructor(props) {
      super(props);
      this.state = {
        'desktop': true
      }
    }

    render () {
        return (
            <div>
                <NavSlide 
                    hrefBack='/#/artgenerator'
                    nameBack='Modern Art Generator'
                    hrefNext='/#/letseat'
                    nameNext='Lets Eat'
                />
                <div className="container">
                    <SlideName name='Find Your Lights' />
                    <SlideScreenshot 
                        src={screenshot}
                        alt='Find Your Lights Screenshot'
                    />
                    <SlideLinks
                        liveHref='https://jbvenuto.github.io/northernlights/'
                        gitHubHref='https://github.com/JBVenuto/northernlights'
                    />
                    <div className="slide-description">
                        <h2>About:</h2>
                        <p>After moving to Michigan’s Upper Peninsula, I knew that I had to see the Northern Lights, but I was having trouble finding an aurora forecast application that I liked so I decided to build my own.</p>
                        <p>I wanted an application that would show the user when the aurora is expected to be visible in their area.</p>
                        <h2>Development:</h2>
                        <p>Testing this application gave me a new way of thinking about UX, and the situations in which apps are used. While using the app on a cold night along the Lake Superior shore I realized that it needed a dark background because the user’s eyes will be adjusted to the dark night sky, and to show the most recent data in case the forecast was wrong. This application was a ton of fun to research as I got to learn about auroras and geomagnetic weather.</p>
                        <h2>Tech Used:</h2>
                        <p>This application gathers information from the National Oceanic and Atmospheric Administration’s Space Weather Prediction API.</p>
                        <p>I used Vanilla JavaScript to build this application to reinforce my JavaScript skills. Before this app, I had primarily been using React or jQuery and I didn’t want to become overly dependent on JavaScript libraries.</p>
                    </div>
                </div>
                <a href="/#/artgenerator">
                    <IoIosArrowBack className="arrow-back" />
                </a>
                <a href="/#/letseat">
                    <IoIosArrowForward className="arrow-forward" />
                </a>
                <SiteMap />
            </div>
        )
    }
}

export default Lights;