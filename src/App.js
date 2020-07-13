import React from 'react';
import './App.css'
import Navbar from './component/navbar/navbar'
import Experience from './component/experience/experience'
import About from './component/about/about'
import Back from './bback.jpg'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App"  >  

    <Switch>
    <Route>
    <About path to="/"/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
