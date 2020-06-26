import React, { useState, useEffect } from 'react'
import './MyHistory.css'

import BurgerMenu from './BurgerMenu'

const MyHistory = ({historic}) => {

  const [history, setHistory] = useState([])
  const [NumberPerDays, setNumberPerDays] = useState([])

  const getHistory = () => {
    const table = []
    const todayTimeStamp = Date.parse(new Date())/1000

    historic.map((index) => {
      for (const i in index) {
        //console.log(index[i])
        table.push(index[i])
      }
    })

    setHistory(table)

    const NumberPerDays = [0,0,0,0,0,0,0]
    
    // console.log(NumberPerDays)

    //console.log(table)
    
    //table[0] && console.log('table i', table[0].takenDate.seconds)

    if(table[0] !== undefined){
        table.map( index => {
            console.log(index)
            let dayNumber = todayTimeStamp -(index.takenDate.seconds)
            console.log(dayNumber)
            if (index.taken === false){
                if(dayNumber < 86400000){
                    NumberPerDays[0]=NumberPerDays[0]+1
                } else if (dayNumber > 86400000 && dayNumber < 172800000 ){
                    NumberPerDays[1]=NumberPerDays[0]+1
                } else if (dayNumber > 172800000 && dayNumber < 259200000){
                    NumberPerDays[2]=NumberPerDays[0]+1
                } else if (dayNumber < 259200000 && dayNumber < 345600000){
                    NumberPerDays[3]=NumberPerDays[0]+1
                } else if (dayNumber < 345600000 && dayNumber < 432000000){
                    NumberPerDays[4]=NumberPerDays[0]+1
                } else if (dayNumber < 432000000 && dayNumber < 518400000){
                    NumberPerDays[5]=NumberPerDays[0]+1
                }
        }
    })
    console.log(NumberPerDays)
    setNumberPerDays(NumberPerDays)
}
}  
  

  useEffect(() => {
    getHistory()
  }, [historic])

  return (
    <div className='container-tab'>
       {console.log(history)} 
      <BurgerMenu />
      <h1>My history</h1>
      <div>
           { NumberPerDays.map( day => (
               <div className={day >= 2 ? 'red' : (day === 1 ? 'orange' : 'green')}>{day}</div>
           ))}
      </div>
      <div>
        <table className='table-meds'>
          <thead>
          <tr><th>Test</th></tr>
          </thead>
          {/* <tbody>
            {history.map(row => (
              row.takenDate
            ))
          </tbody> 
          <tbody>
             
          </tbody> 
          <tbody>
              {history.map((row, i)=>
                <tr key={i}>
                    {history.map((col, j)=>
                    <td key={j}>{col}</td>
                    )}
                </tr>
              )}
          </tbody>*/}
          <tr>
              {history.map((med) => (
                <td>{med.nom}</td>
              ))}
            </tr>  
          <tfoot>footer</tfoot>
        </table>
      </div>
    </div>
  )

}

export default MyHistory 
