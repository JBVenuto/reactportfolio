import React, { Component } from 'react';
import NavSlide from '../components/NavSlide';

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
            </div>
        )
    }
}

export default ArtGenerator;