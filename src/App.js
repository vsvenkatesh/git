import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './component/login/login';
import Home from './component/Home';
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
              </Switch>
        </Router>
      
    );
  }
}
export default App;
