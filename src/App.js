import React from 'react';
import { Switch, Route } from 'react-router-dom'

//import BurgerMenu from './components/BurgerMenu'
import Home from './components/Home'
import Loader from './components/Loader'
import MyDiary from './components/MyDiary'
import MyHistory from './components/MyHistory'
import MyPillbox from './components/MyPillbox'
import MyTreatment from './components/MyTreatment'


import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <BurgerMenu/> */}
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route path = '/myLoader' component = {Loader} />
        <Route path = '/myDiary' component = {MyDiary} />
        <Route path = '/myHistory' component = {MyHistory} />
        <Route path = '/myPillbox' component = {MyPillbox} />
        <Route path = '/myTreatment' component = {MyTreatment} />
      </Switch>
    </div>
  );
}

export default App
