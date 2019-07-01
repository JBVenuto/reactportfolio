import React, { Component } from 'react';
import './main.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SlideScreenshot from '../components/SlideScreenshot';
import SlideLinks from '../components/SlideLinks';
import screenshot from '../images/northernlights.jpg';

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
                    <SlideName name='' />
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
                        <p></p>
                        <h2>Development:</h2>
                        <p></p>
                        <h2>Tech Used:</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lights;