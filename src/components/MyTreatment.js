import React, { useState, useEffect } from 'react'
import Modal from './../components/FormMedicament'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Delete from '../Firebase/Delete'

import BurgerMenu from './BurgerMenu'

import './MyTreatment.css'

const MyTreatment = (props) => {
    const[openModal, setOpenModal] = useState(false);
    const [data , setData] = useState([])

    const showModal = ()=> { 
        setOpenModal(true)
    }
    const closeModal = ()=> {
        setOpenModal(false)
    }

    useEffect(() => {
        setData(props.dataTreatment)
        console.log({...props.medicine[2]}.id)
    },[props.dataTreatment])
    
    return (
        <div className='container-more'>
            <BurgerMenu/>
            <div className='banniere'>
                <h1 className='myTreatment'>My Treatment</h1>
            </div>
            <div >
                <ul>{data.map((doc,key) => 
                    <div className='li'>
                        <li key={key}>{doc[0].nom}</li>
                        <FontAwesomeIcon icon={faTimesCircle} className='icon-delete' onClick={()=>Delete(doc[1],props.callDataBase)} />
                    </div>
                
                    )}
                </ul>
                <FontAwesomeIcon icon={faPlusCircle} className='iconMore' onClick={() =>showModal()} />
            </div>
            <div><Modal callDataBase={props.callDataBase} showModal={openModal} closeModal={closeModal} /></div>
        </div>
    
    )
}

export default MyTreatment
