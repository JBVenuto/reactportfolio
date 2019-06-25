import React, { Component } from 'react';
import './main.css';
// Componenets 
import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SlideScreenshot from '../components/SlideScreenshot';
import SlideLinks from '../components/SlideLinks';
import screenshot from '../images/arthistory.jpg';

class ArtGenerator extends Component {
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
                    <SlideName name='Modern Art Generator' />
                    <SlideScreenshot 
                        src={screenshot}
                        alt='Modern Art Generator Screenshot'
                    />
                    <SlideLinks
                        liveHref='https://jbvenuto.github.io/modernart/'
                        gitHubHref='https://github.com/JBVenuto/modernart'
                    />
                    <div className="slide-description">
                        <h2>About:</h2>
                        <p>Making a modern art gererator is something I've been wanting to do since visiting the Los Angeles County Museum of Art.</p>
                        <h2>Tech Used:</h2>
                        <p>This application uses CSS Grid</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArtGenerator;