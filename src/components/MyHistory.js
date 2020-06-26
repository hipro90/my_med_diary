import React, { useState, useEffect } from 'react'

import BurgerMenu from './BurgerMenu'
import './MyHistory.css'

    

const MyHistory = ({historic}) => {

  const [history, setHistory] = useState([])
  const [NumberPerDays, setNumberPerDays] = useState([])
  const [lastDays, selLastDays] = useState([])

  const getHistory = () => {
    const table = []
    const todayTimeStamp = Date.parse(new Date())/1000

    historic.map((index) => {
      for (const i in index) {
        table.push(index[i])
      }
    })

    setHistory(table)

    const NumberPerDays = [0,0,0,0,0]

    if(table[0] !== undefined){
        table.map( index => {
            let dayNumber = todayTimeStamp -(index.takenDate.seconds)
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
    setNumberPerDays(NumberPerDays)
}
}  

const getDates = () =>{

    const lastDays = [0,0,0,0,0]
    const todayTimeStamp = Date.parse(new Date())/1000
    lastDays[0] = todayTimeStamp
    for (let i = 1 ; i < lastDays.length; i++){
        lastDays[i] = lastDays[i-1]- 86400
    }
    for (let i = 0 ; i < lastDays.length; i++){
        const date = new Date(lastDays[i] * 1000)
        lastDays[i] = `${date.getDate()}/${date.getMonth()+1}`
        
    }
    selLastDays(lastDays)

}


  useEffect(() => {
    getHistory()
  }, [historic])

  useEffect(() =>{
      getDates()
  }, [])
      
        return (
            <>
          <div className='container-tab'>
          <div className='banniere'>
            <BurgerMenu />
            <h1 >My history</h1>
            </div>
              <table className='table-meds'>
              <tbody>
                <tr>
                    <th className="medicine" scope="col">Medicines</th>
                    {/* <th scope="col">Medecin</th>
                    <th scope="col">Sunday</th>
                    <th scope="col">Thusday</th>
                    <th scope="col">Wendsday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th> */}
                    {lastDays.map( day => (
                        <th className="days">{day}</th>
                    ))}
                    
                </tr>            
                {history.map((med, i) => (
                <tr key={i}>
                <td>{med.nom}</td>
                { NumberPerDays.map( day => (
                <td className={day >= 2 ? 'red' : (day === 1 ? 'orange' : 'green')}></td>
                    ))} 
                </tr>
              ))}
                </tbody> 
              </table>
            
            <section className='container-notice'>
                <div className='done'>Well done !</div>
                <div className='taken'>Not yet / forgotten</div>
                <div className='missed'>You missed it!</div>
            </section>
            </div>
            </>

          )
      }
      
      export default MyHistory
      
