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
        <Route path = '/loader' component = {Loader} />
        <Route path = '/diary' component = {MyDiary} />
        <Route path = '/history' component = {MyHistory} />
        <Route path = '/pillbox' component = {MyPillbox} />
        <Route path = '/treatment' component = {MyTreatment} />
      </Switch>
    </div>
  );
}

export default App
