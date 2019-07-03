import React, { Component } from 'react';
import './main.css';
// Imported components
import About from '../components/About';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PortfoDesc from '../components/PortfoDesc';
import PortfoScreen from '../components/PortfoScreen';
import SiteMap from '../components/SiteMap';
import Skill from '../components/Skill';
// Imported images
import arthistory from '../images/mainpage/arthistory.jpg';
import northernlights from '../images/mainpage/northernlights.jpg';
import restaurants from '../images/mainpage/restaurants.jpg';
import modernart from '../images/mainpage/modernart.jpg';
import v from '../images/mainpage/v1.jpg';
import me from '../images/mainpage/headshotpresq.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // Render the components and JSX
  render() {
    return (
      <div className="all">
        <div className="wide-nav">
        <Nav />
        </div>
        {/*  ------Header section------ */}
        <div className="container">
          <Header
            src={v}
          />

          {/*  ------Skills section------ */}
          <span id="skills"></span>
          <div className="skills">
            <Skill skill="HTML" id="first-skill" />
            <Skill skill="CSS" />
            <Skill skill="Sass" />
            <Skill skill="BootStrap" />
            <Skill skill="JavaScrip" />
            <Skill skill="jQuery" />
            <Skill skill="Node.js" /> 
            <Skill skill="Express" />
            <Skill skill="React" /> 
            <Skill skill="MySQL" />
            <Skill skill="MongoDB" />
            <Skill skill="GIT" id="last-skill" />
          </div>

          {/* ------Portfolio section------ */}
          <span id="portfolio"></span>
          <div className="portfolio" >
            <a href="/lights" className="port-row">
              <PortfoScreen
                  src={northernlights}
                  alt="Screenshot of Find Your Lights"
              />
              <PortfoDesc 
                  title="Find Your Lights"
                  description="Application for the user to find when the Northern Lights will be visible"
              />
            </a>
            <a href="/letseat" className="port-row">
              <PortfoDesc 
                  className="portDesc2"
                  title="Let's Eat"
                  description="User generated list to keep track of restaurants to try and the ones worth returning to"
              />
              <PortfoScreen
                  className="portScreen2"
                  src={restaurants}
                  alt="Screenshot of Lets Eat"
              />
            </a>
            <a href="/memory" className="port-row">
              <PortfoScreen
                  className="portScreen1"
                  src={arthistory}
                  alt="Screenshot of art memory game"
              />
              <PortfoDesc 
                  className="portDesc1"
                  title="Art History Memory Game"
                  description="Memory game using pieces of art from various time frames"
              />
            </a>
            <a href="/artgenerator" className="port-row">
              <PortfoDesc 
                  className="portDesc2"
                  title="Modern Art Generator"
                  description="Each load will create a piece of modern art randomly generated with JavaScript"
              />
              <PortfoScreen
                  className="portScreen2"
                  src={modernart}
                  alt="Screenshot of Modern Art Generator"
              />
            </a>
          </div>

          {/* ------About me section------ */}
          <span id="about"></span>
          <About src={me} />
          
        </div>
        <SiteMap />
      </div>
    );
  }
}

export default App;