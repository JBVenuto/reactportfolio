import React, { Component } from 'react';
import './slide.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SlideScreenshot from '../components/SlideScreenshot';
import SlideLinks from '../components/SlideLinks';
import SiteMap from '../components/SiteMap';
import screenshot from '../images/gifs/lightsdesk.gif';

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
                    hrefBack='/artgenerator'
                    nameBack='Modern Art Generator'
                    hrefNext='/letseat'
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
                        <p>I wanted an application that would show me any future times that might have a visible aurora and to be useable in areas outside my own.</p>
                        <h2>Development:</h2>
                        <p>This application was a ton of fun to research as I got to learn about auroras and geomagnetic weather. Testing the application gave me a new way of thinking about UX, and the situation in which it will be used. While using the app on a cold night along the Lake Superior shore I realized that it needed a dark background, and to show the most recent readings instead of just the forecasts.</p>
                        <h2>Tech Used:</h2>
                        <p>I wanted to use Vanilla JavaScript while making this application because I didn’t want to become overly deponent on libraries. By using Vanilla JavaScript I was able to greatly grow my DOM interaction skills, which were quite limited prior.</p>
                    </div>
                </div>
                <SiteMap />
            </div>
        )
    }
}

export default Lights;