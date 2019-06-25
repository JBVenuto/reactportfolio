import React, { Component } from 'react';
import NavSlide from '../components/NavSlide';

class Lights extends Component {
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
                    hrefBack='/artgenerator'
                    nameBack='Modern Art Generator'
                    hrefNext='/letseat'
                    nameNext='Lets Eat'
                />
            </div>
        )
    }
}

export default Lights;