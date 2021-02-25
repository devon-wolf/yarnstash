import './App.css'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom'
import Home from './Home.js'
import AllYarn from './ListPage/AllYarn.js'
import OneYarn from './DetailPage/OneYarn.js'
import AddYarnPage from './CreatePage/AddYarnPage.js'
import Header from './Common/Header.js'

function App() {
  return (
    <Router>
      <Header />
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
        <Route
          path="/new"
          exact
          render={(routerProps) => <AddYarnPage {...routerProps}/>}
        />
      </Switch>
    </Router>
  );
}

export default App;