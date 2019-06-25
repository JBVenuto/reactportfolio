import React, { Component } from 'react';
import './main.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SlideScreenshot from '../components/SlideScreenshot';
import SlideLinks from '../components/SlideLinks';
import screenshot from '../images/arthistory.jpg';

class Memory extends Component {
    constructor(props) {
      super(props);
      this.state = {
          'display': 'desktop'
      }
    }

    render () {
        return (
            <div>
                <NavSlide 
                    hrefBack='/letseat'
                    nameBack='Lets Eat'
                    hrefNext='/artgenerator'
                    nameNext='Modern Art Generator'
                />
                <div className="container">
                    <SlideName name='' />
                    <SlideScreenshot 
                        src={screenshot}
                        alt='Art History Memory Game'
                    />
                    <SlideLinks
                        liveHref='https://jbvenuto.github.io/arthistorygame/'
                        gitHubHref='https://github.com/JBVenuto/arthistorygame'
                    />
                    <div className="slide-description">
                        <h2>About:</h2>
                        <p></p>
                        <h2>Tech Used:</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Memory;