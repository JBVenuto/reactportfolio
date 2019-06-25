import React, { Component } from 'react';
import NavSlide from '../components/NavSlide';

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
            </div>
        )
    }
}

export default Memory;