import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomePage from '../pages/HomePage'
import IntroductionPage from '../pages/IntroductionPage'
import LevelPage from '../pages/LevelPage'
import ObjectivePage from '../pages/ObjectivePage'

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/introduction">
          <IntroductionPage />
        </Route>
        <Route exact path="/objetive">
          <ObjectivePage />
        </Route>
        <Route exact path="/level">
          <LevelPage />
        </Route>
        <Route path="*">
          <h1>404 Not found</h1>
        </Route>
      </Switch>
    </Router>
  )
}
