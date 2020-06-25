import React, {useState, useEffect} from 'react'

import './MyPillbox.css'

const medicaments = [
    {id : 1, nom : 'doliprane' , quantiteParPrise : 2, matin : true, midi : true, soir : true, debut : new Date(2020, 6, 12), fin : new Date(2020, 6, 20)},
    {id : 2, nom : 'ibuprofène', quantiteParPrise : 4, matin : true, midi : false, soir : true, debut : new Date(2020, 6, 12), fin : new Date(2020, 6, 20) },
    {id : 3, nom : 'medoc', quantiteParPrise : 2, matin : false, midi : true, soir : false, debut : new Date(2020, 4, 12), fin : new Date(2020, 6, 26) },
    {id : 4, nom : 'strepsil', quantiteParPrise : 1, matin : true, midi : true, soir : true, debut : new Date(2020, 4, 12), fin : new Date(2020, 6, 26)},
    {id : 5, nom : 'xanax', quantiteParPrise : 1, matin : false, midi : false, soir : true, debut : new Date(2020, 5, 12), fin : new Date(2020, 6, 20) },
    {id : 6, nom : 'aspirine', quantiteParPrise : 2, matin : true, midi : true, soir : true, debut : new Date(2020, 5, 12), fin : new Date(2020, 6, 26) }
]


//var uneAutreDate = new Date(annee, mois, jour);

const MyPillbox = () => {

    
    const [medList, setMedList] = useState([])
    

    const getCurrentMedList = () => {
        const today = new Date()
        //console.log(today)
        const todayMedListToTake = medicaments
        for (let i =0 ; i<medicaments.length ; i++){
            todayMedListToTake[i].taken = false
        }
        
        //console.log( todayMedListToTake)
        const todayMedList = todayMedListToTake.filter( med => (
            med.debut <= today)).filter(med =>(med.fin >= today))
         
        //console.log(todayMedList)
        if (today.getHours() < 11){
            console.log('c\'est le matin')
            setMedList(todayMedList.filter( med => med.matin = true ))
        } else if (today.getHours() >= 11 && today.getHours() < 17){
            console.log('c\'est le midi')
            setMedList(todayMedList.filter( med => med.midi = true ))
        } else {
            console.log('c\'est le soir')
            setMedList(todayMedList.filter( med => med.soir === true ))
            
        }
    }

    const handleCheckedMeds = (event) => {
        const takenMeds = medList
        console.log(event.target.id)
        const index = takenMeds.findIndex(med => med.id === parseInt(event.target.id))
        console.log(index)
        takenMeds[index].taken = !takenMeds[index].taken
        console.log(takenMeds)
        takenMeds[index].takenDate = new Date()
    }

    useEffect(() => getCurrentMedList(), [])

    return (
        <div className="pillbox">
            <h2 className="pillboxH2">My Pillbox</h2>
            <div className="medListContainer">
                <div className="medList">
                    {medList.map(med =>(
                        <div key={med.id}>                            
                            <input id={med.id} type='checkbox'  onClick={(event)=>{ document.getElementById(`${med.nom}`).classList.toggle('green'); handleCheckedMeds(event); }} />
                            <label id={med.nom} htmlFor={med.id} >{med.nom}</label>
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    )
}

export default MyPillbox

//{console.log(medList)}
