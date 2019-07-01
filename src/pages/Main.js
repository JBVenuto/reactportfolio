import React, { Component } from 'react';
import './main.css';
// Imported components
import About from '../components/About';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PortfoDesc from '../components/PortfoDesc';
import PortfoScreen from '../components/PortfoScreen';
import Skill from '../components/Skill';
// Imported images
import arthistory from '../images/arthistory.jpg';
import northernlights from '../images/northernlights.jpg';
import restaurants from '../images/restaurants.jpg';
import v from '../images/v1.jpg';
import me from '../images/headshotpresq.jpg'

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
        <Header
          src={v}
        />

        {/*  ------Skills section------ */}
        <div className="container" id="skills">
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
        </div>

        {/* ------Portfolio section------ */}
        <div className="container">
          <div className="portfolio" id="portfolio">
            <a href="/lights" className="port-row">
              <PortfoScreen
                  src={northernlights}
                  alt="Screenshot of Find Your Lights"
              />
              <PortfoDesc 
                  title="Find the Northern Lights"
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
                  title="Art History Memory"
                  description="Memory game using pieces of art from various time frames"
              />
            </a>
          </div>
        </div>

        {/* ------About me section------ */}
        <div className="container" id="about">
          <About src={me} />
        </div>
      </div>
    );
  }
}

export default App;