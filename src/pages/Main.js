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
          <Skill className="cell" skill="HTML" />
          <Skill className="cell" skill="CSS" />
          <Skill className="cell" skill="Sass" />
          <Skill className="cell" skill="BootStrap" />
          <Skill className="cell" skill="JavaScrip" />
          <Skill className="cell" skill="jQuery" />
          <Skill className="cell" skill="Node.js" /> 
          <Skill className="cell" skill="Express" />
          <Skill className="cell" skill="React" /> 
          <Skill className="cell" skill="MySQL" />
          <Skill className="cell" skill="MongoDB" />
          <Skill className="cell" skill="GIT" />
        </div>
        <div className="grid" id="portfolio">
          <a href="/lights">
            <PortfoDesc 
                className="cell"
                title="Find the Northern Lights"
                description="Application for the user to find when the Northern Lights will be visible"
            />
          </a>
          <a href="/letseat">
            <PortfoDesc 
                className="cell"
                title="Let's Eat"
                description="User generated list to keep track of restaurants to try and the ones worth returning to"
            />
          </a>
          <a href="/memory">
            <PortfoDesc 
                className="cell"
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