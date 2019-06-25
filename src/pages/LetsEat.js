import React, { Component } from 'react';
import './main.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SlideScreenshot from '../components/SlideScreenshot';
import SlideLinks from '../components/SlideLinks';
import screenshot from '../images/restaurants.jpg';

class LetsEat extends Component {
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
                    hrefBack='/lights'
                    nameBack='Find Your Lights'
                    hrefNext='/memory'
                    nameNext='Memory Game'
                />
                <div className="container">
                    <SlideName name='Lets Eat' />
                    <SlideScreenshot 
                        src={screenshot}
                        alt='Lets Eat Screenshot'
                    />
                    <SlideLinks
                        liveHref='https://jbvenuto.github.io/restaurantfrontend/'
                        gitHubHref='https://github.com/JBVenuto/restaurants'
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

export default LetsEat;