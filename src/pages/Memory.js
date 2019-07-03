import React, { Component } from 'react';
import './slide.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SlideScreenshot from '../components/SlideScreenshot';
import SlideLinks from '../components/SlideLinks';
import SiteMap from '../components/SiteMap';
import screenshot from '../images/gifs/memorydesk.gif';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class Memory extends Component {
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
                    hrefBack='/letseat'
                    nameBack='Lets Eat'
                    hrefNext='/artgenerator'
                    nameNext='Modern Art Generator'
                />
                <div className="container">
                    <SlideName name='Art History Memory Game' />
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
                        <p>I built this application to get hands on experience using React. It’s a fun little memory game that challenges the user to click on each picture only once. The pictures are rearranged after each click.</p>
                        <h2>Development:</h2>
                        <p>Building this application taught me the basics of React. I enjoyed how easy it is to reuse components.</p>
                        <h2>Tech Used:</h2>
                        <p>Because this game was built as a learning experience it focuses on the React library which uses JavaScript, JSX, and HTML. I also used Bootstrap and CSS for stylizing. The pictures come from the Met’s collection of open access artworks.</p>
                    </div>
                </div>
                <IoIosArrowBack className="arrow-back" />
                <IoIosArrowForward className="arrow-forward" />
                <SiteMap />
            </div>
        )
    }
}

export default Memory;