import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
//Pages to use with the router
import Main from './pages/Main';
import LetsEat from './pages/LetsEat';
import ArtGenerator from './pages/ArtGenerator';
import Lights from './pages/Lights';
import Memory from './pages/Memory';

const App = () => (
  // <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/letseat" component={LetsEat} />
        <Route exact path="/lights" component={Lights} />
        <Route exact path="/memory" component={Memory} />
        <Route exact path="/artgenerator" component={ArtGenerator} />
      </Switch>
    </div>
  // </BrowserRouter>
)

export default App;