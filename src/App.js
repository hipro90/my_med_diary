import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Firebase/Config'
import 'firebase/firestore'
import * as firebase from 'firebase'

import Home from './components/Home'
import Loader from './components/Loader'
import MyDiary from './components/MyDiary'
import MyHistory from './components/MyHistory'
import MyPillbox from './components/MyPillbox'
import MyTreatment from './components/MyTreatment'

import './App.css';

const App = () => {
  const db = firebase.firestore()
  const [historic, setHistoric] = useState([])
  const [medicine, setMedicine] = useState([])
  const [dataTreatment, setDataTreatment] = useState([])
  
  
  useEffect(() => {
      db.collection('historic').get()
      .then(snapShot => {
        const result = snapShot.docs.map(doc => doc.data())
        // snapShot.docs.map(doc => console.log(doc.id ))
          setHistoric(result)
      })
      .catch(error => {
          console.log("Error writing document:", error)
      })

      callDataBase()
  },[db])

  const callDataBase = () => {
    db.collection('medicine').get()
      .then(snapShot => {
          const result = snapShot.docs.map(doc => doc.data())
          const data = snapShot.docs.map(doc => 
            [doc.data(), doc.id])
            setMedicine(result)
            setDataTreatment(data)
      }) 
      .catch(error => {
          console.log("Error writing document:", error)
      })
  }

  

  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {Loader} />
        <Route path = '/Home' component = {Home} />
        <Route path = '/myHistory'>
          <MyHistory historic={historic} />
        </Route>
        <Route path = '/myPillbox'>
          <MyPillbox medicine={medicine} historic={historic}/>
        </Route>
        <Route path = '/myTreatment'>
          <MyTreatment callDataBase={callDataBase} dataTreatment={dataTreatment}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App
