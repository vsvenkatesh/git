import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './component/login/login';
import Home from './component/Home';
import table from './component/table';
import two from './component/two';
import three from './component/three';
import four from './component/four';
import five from './component/five';
import six from './component/six';
import seven from './component/seven';
import eight from './component/eight';
import nine from './component/nine';
import example from './component/example';
import search from './component/search';
class App extends Component {
  render() {
    return (
      <Router>
              <Switch>
                 <Route
                 exact path='/Home' component={Home} />
                 <Route exact path='/' component={Login} />
                 <Route exact path='/search' component={search} />
                 <Route exact path='/table/:id' component={table} />
                 <Route exact path='/example' component={example} />
                 <Route exact path='/category/:id' component={two} />
                 <Route exact path='/add-image/:id' component={three} />
                 <Route exact path='/add-images/:id' component={four} />
                 <Route exact path='/add-imagess/:id' component={five} />
                 <Route exact path='/add-images/img/:id' component={six} />
                 <Route exact path='/add-imagess/img/:id' component={seven} />
                 <Route exact path='/add-imagess/imgs/:id' component={eight} />
                 <Route exact path='/add-imagess/iamg/:id' component={nine} />
              </Switch>
        </Router>
      
    );
  }
}
export default App;
