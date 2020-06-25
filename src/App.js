import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Firebase/Config'
import 'firebase/firestore'
import * as firebase from 'firebase'

import Delete from './Firebase/Delete'
import BurgerMenu from './components/BurgerMenu'
import Home from './components/Home'
import Loader from './components/Loader'
import MyDiary from './components/MyDiary'
import MyHistory from './components/MyHistory'
import MyPillbox from './components/MyPillbox'
import MyTreatment from './components/MyTreatment'

import './App.css';

const App = () => {
  const db = firebase.firestore()
  const [historique, setHistorique] = useState([])
  const [medicament, setMedicament] = useState([])

  useEffect(() => {
      db.collection('historique').get()
      .then(snapShot => {
          const result = snapShot.docs.map(doc => doc.data())
          setHistorique(result)
      })
      .catch(error => {
          console.log("Error writing document:", error)
      })

      db.collection('medicament').get()
      .then(snapShot => {
          const result = snapShot.docs.map(doc => doc.data())
          setMedicament(result)
      })
      .catch(error => {
          console.log("Error writing document:", error)
      })
  },[])

  return (
    <div className="App">      
      {/* <BurgerMenu/> */}
      <Switch>
        <Route exact path = '/' component = {Loader} />
        <Route path = '/Home' component = {Home} />
        <Route path = '/myDiary' component = {MyDiary} />
        <Route path = '/myHistory' component = {MyHistory} />
        <Route path = '/myPillbox' component = {MyPillbox} />
        <Route path = '/myTreatment'>
          <MyTreatment medicament={medicament} />
        </Route>
      </Switch>
    </div>
  );
}

export default App
