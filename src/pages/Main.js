import React, { Component } from 'react';
// import './App.css';
// Imported components
import About from '../components/About';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Portfolio from '../components/Portfolio';
import PortfoDesc from '../components/PortfoDesc';
import PortfoScreen from '../components/PortfoScreen';
import Skill from '../components/Skill';
// Imported images
import arthistory from '../images/arthistory.jpg';
import northernlights from '../images/northernlights.jpg';
import restaurants from '../images/restaurants.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // Render the components and JSX
  render() {
    return (
      <div className="all">
        <Nav />
        {/* Header will go here */}
        <div className="grid" id="skills">
          <Skill skill="HTML" />
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
          <Skill skill="GIT" />
        </div>
        <div className="grid" id="portfolio">
          <a href="/lights">
            <PortfoScreen
                src={northernlights}
                alt="Screenshot of Find Your Lights"
            />
            <PortfoDesc 
                title="Find the Northern Lights"
                description="Application for the user to find when the Northern Lights will be visible"
            />
          </a>
          <a href="/letseat">
            <PortfoDesc 
                title="Let's Eat"
                description="User generated list to keep track of restaurants to try and the ones worth returning to"
            />
            <PortfoScreen
                src={restaurants}
                alt="Screenshot of Lets Eat"
            />
          </a>
          <a href="/memory">
            <PortfoScreen
                src={arthistory}
                alt="Screenshot of art memory game"
            />
            <PortfoDesc 
                title="Art History Memory"
                description="Memory game using pieces of art from various time frames"
            />
          </a>
        </div>
        <div id="about">

        </div>
      </div>
    );
  }
}

export default App;