// dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// page components
import Blog from './pages/Blog'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'

// components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
