import React, { useState, useEffect } from 'react'
import Write from '../Firebase/Write'
import { Link } from 'react-router-dom'

import BurgerMenu from './BurgerMenu'

import './MyPillbox.css'

// const medicaments = [
//     { id: 1, nom: 'doliprane', quantiteParPrise: 2, matin: true, midi: true, soir: true, debut: new Date(2020, 6, 12), fin: new Date(2020, 6, 20), present: 1 },
//     { id: 2, nom: 'ibuprofène', quantiteParPrise: 4, matin: true, midi: false, soir: true, debut: new Date(2020, 6, 12), fin: new Date(2020, 6, 20), present: 1 },
//     { id: 3, nom: 'medoc', quantiteParPrise: 2, matin: false, midi: true, soir: false, debut: new Date(2020, 4, 12), fin: new Date(2020, 6, 26), present: 0 },
//     { id: 4, nom: 'strepsil', quantiteParPrise: 1, matin: true, midi: true, soir: true, debut: new Date(2020, 4, 12), fin: new Date(2020, 6, 26), present: 1 },
//     { id: 5, nom: 'xanax', quantiteParPrise: 1, matin: false, midi: false, soir: true, debut: new Date(2020, 5, 12), fin: new Date(2020, 6, 20), present: 1 },
//     { id: 6, nom: 'aspirine', quantiteParPrise: 2, matin: true, midi: true, soir: true, debut: new Date(2020, 5, 12), fin: new Date(2020, 6, 26), present: 1 }
// ]

//var uneAutreDate = new Date(annee, mois, jour);

const MyPillbox = (props) => {
    const [medList, setMedList] = useState([])
    const [message, setMessage] = useState(null)
    const [allMedsTaken, setAllMedsTaken] = useState({})
    const [dataMedicine, setDataMedicine] = useState([])
    const [dataHistoric, setDataHistoric] = useState([])
    const [historyOfTheDayPart, setHistoryOfTheDayPart] = useState([])
    const [checkedSomething, setCheckedSomething] = useState(false)
    const [alreadyValidate, setAlreadyValidate] = useState(false)
    const collection = 'historic'

    useEffect(() => {
        setDataMedicine(props.medicine)
    },[props.medicine])

    useEffect(() => {
        setDataHistoric(props.historic)
    },[props.historic])

    useEffect(() => { 
        getCurrentMedList() 
    }, [dataMedicine])

    useEffect(()=>{
        getHistory()
    }, [props.historic] )


    const getHistory =() =>{
        const dataHistoric = props.historic
        const today = new Date()
        const todayTimeStamp = Date.parse(today)/1000
        let historyOfTheDayPart = []

        if (today.getHours() < 11){
            dataHistoric.map((index) => {
                for(const i in index) {
                    const date = new Date(index[i].takenDate.seconds * 1000)
                    const dateTimeStamp = index[i].takenDate.seconds 
                    
                    if ( date.getHours() < 11 && ((todayTimeStamp-dateTimeStamp) < 86400000)){
                        historyOfTheDayPart.push(index[i])
                        setAlreadyValidate(true)
                    }
                }
                setHistoryOfTheDayPart(historyOfTheDayPart)
            })
        } else if (today.getHours() >= 11 && today.getHours() < 17){
            dataHistoric.map((index) => {
                for(const i in index) {

                    const date = new Date(index[i].takenDate.seconds * 1000)
                    const dateTimeStamp = index[i].takenDate.seconds 
            
                    if ( date.getHours() >= 11 && date.getHours() < 17 && ((todayTimeStamp-dateTimeStamp) < 86400000)){
                        historyOfTheDayPart.push(index[i])
                        setAlreadyValidate(true)
                    }
                }
                setHistoryOfTheDayPart(historyOfTheDayPart)
            })
        } else {
            dataHistoric.map((index) => {
                
                for(const i in index) {
                    const date = new Date(index[i].takenDate.seconds * 1000)
                    const dateTimeStamp = index[i].takenDate.seconds 
                    
                    //const todayTimeStamp = Date.parse(today)/1000
                    //console.log(date)
                    //console.log(date.getHours())
                    //console.log(dateTimeStamp)
                    //console.log(todayTimeStamp)
                    if (date.getHours() > 17 && date.getHours() < 23 && ((todayTimeStamp-dateTimeStamp) < 86400000)){
                        historyOfTheDayPart.push(index[i])
                        setAlreadyValidate(true)
                        //console.log(index[i])
                    }
                    
                    //console.log('test')
                    //&& (todayTimeStamp-dateTimeStamp) < 86400000
                    //console.log( (Date.parse('02 Jan 1970 00:00:00 GMT'))- (Date.parse('01 Jan 1970 00:00:00 GMT')) )
                    //console.log(new Date(86400000))
                }
                setHistoryOfTheDayPart(historyOfTheDayPart)
            })
        }
        }
     

    const getCurrentMedList = () => {
        const today = new Date()

        let todayMedList = dataMedicine
        for (let i = 0; i < dataMedicine.length; i++) {
            todayMedList[i].debut = new Date(todayMedList[i].debut)
            todayMedList[i].fin = new Date(todayMedList[i].fin)
            todayMedList[i].taken = false
        }

        todayMedList = todayMedList.filter(med => (
            med.present === true && med.debut <= today && med.fin >= today))

        if (today.getHours() < 11) {
            setMessage("Medicines to take during breakfast :")
            setMedList(todayMedList.filter(med => med.matin === true))
        } else if (today.getHours() >= 11 && today.getHours() < 17) {
            setMessage("Medicines to take during lunch :")
            setMedList(todayMedList.filter(med => med.midi === true))
        } else {
            setMessage("Medicines to take during diner :")
            setMedList(todayMedList.filter(med => med.soir === true))
        }
    }

    const handleCheckedMeds = (event) => {
        const takenMeds = medList
        const index = takenMeds.findIndex(med => med.id === parseInt(event.target.id))
        takenMeds[index].taken = !takenMeds[index].taken
        takenMeds[index].takenDate = new Date()
        setAllMedsTaken(takenMeds)
        setCheckedSomething(true)
    }
    
    const sendData = () => {
        if (checkedSomething === true) {
            Write(collection, {...allMedsTaken})
            console.log('allMedsTaken',allMedsTaken)
        } else {
            for ( let i=0 ; i < medList.length ;i++ ){
                medList[i].takenDate = new Date()
            }
            console.log('medList',medList)
            Write(collection, {...medList})
        }
    }

    return alreadyValidate ? (
            <div className="pillbox">
                <div className="bannierePill">
                <BurgerMenu/>
                <h1 className="pillboxH1">My pillbox</h1>
                </div>
                <p className="pillboxP2">You already took your medicines :</p>
                {console.log(historyOfTheDayPart)}
                <div className="medListContainer2">
                {historyOfTheDayPart.map(med => (
                    <div className="medList2" key={med.takenDate}>
                    <p className={med.taken ? "medInGreen2" : "medInRed2"}>{med.nom}</p>
                    </div>
                ))}
                </div>
            </div>
            )  :(
        <div className="pillbox">
            {console.log(historyOfTheDayPart)}
            <div className="bannierePill">
            <BurgerMenu/>
            <h1 className="pillboxH1">My Pillbox</h1>
            </div>
            <p className="pillboxP">{message}</p>
            <div className="medListContainer">
                <div className="medList">
                    {medList.map(med => (
                        <div key={med.id} className="med">
                            <input  id={med.id} type='checkbox' onClick={(event) => { document.getElementById(`${med.nom}`).classList.toggle('medInGreen'); handleCheckedMeds(event); }} />
                            <label className="medInRed" id={med.nom} htmlFor={med.id} >{med.nom}</label>
                        </div>
                    ))}
                </div>
            </div>
            <button className="buttonPillbox" onClick={()=> sendData()} ><Link to='/Home'>VALIDATE</Link></button>
        </div>
    )
}

export default MyPillbox

//{console.log(dataHistoric)}