import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Body />
        
        <Switch>
          <Route exact path="/">
            <h1>home</h1>
          </Route>
          <Route path="/about">
            <h1>about</h1>
          </Route>
        </Switch>
  
        <Footer />

      </Router>
    </div>
  );
}