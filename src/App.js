import './App.css';
import request from 'superagent'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Home from './Home.js'
import AllYarn from './AllYarn.js'
import OneYarn from './OneYarn.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route 
          path="/"
          exact
          render={(routerProps) => <Home {...routerProps}/>}
        />
        <Route
          path="/yarn"
          exact
          render={(routerProps) => <AllYarn {...routerProps}/>}
        />
        <Route
          path="/yarn/:id"
          exact
          render={(routerProps) => <OneYarn {...routerProps}/>}
        />
      </Switch>
    </Router>
  );
}

export default App;