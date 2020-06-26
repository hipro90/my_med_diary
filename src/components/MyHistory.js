import React, {useState, useEffect} from 'react'
import BurgerMenu from './BurgerMenu'
import './MyHistory.css'

    const MyHistory = ({historic}) => {
        const [history, setHistory] = useState([])
      
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
          console.log(table)
      
          if(table[0] !== undefined){
           for (let i=table.length ; i > 0 ; i--){

           }
          }
        }
      
        useEffect(() => {
          getHistory()
        }, [historic])
      
        return (
            <>
          <div className='container-tab'>
            <BurgerMenu />
            <h1>My history</h1>
              <table className='table-meds'>
              <tbody>
                <tr>
                    <th scope="col">Medecin</th>
                    <th scope="col">Sunday</th>
                    <th scope="col">Thusday</th>
                    <th scope="col">Wendsday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                </tr>            
                {history.map((med, i) => (
                <tr key={i}>
                <td>{med.nom}</td>
                </tr>
              ))}
              <tr>
              <td>Sunday</td>
                </tr>                
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
      
