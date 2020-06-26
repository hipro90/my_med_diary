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
    },[props.dataTreatment])
    
    return (
        <>
        <BurgerMenu/>
        <h1>My Treatment</h1>
        <div onClick={() =>showModal()} className='container-more'>
            <ul>{data.map((doc,key) => 
                <div className='li'>
                    <li key={key}>{doc[0].nom}</li>
                    <button id={doc[1]} onClick={()=>Delete(doc[1])}>Delete</button>
                </div>
            
                )}
            </ul>
            {/* <form className="formMore">
                <div className='container-checks'>
                <FontAwesomeIcon icon={faTimesCircle} className='icon' />
                <label className='nom-med'>Medecine</label>
                </div>                              
            </form> */}
            <FontAwesomeIcon icon={faPlusCircle} className='iconMore' />
        </div>
        <div><Modal callDataBase={props.callDataBase} showModal={openModal} closeModal={closeModal} /></div>
        </>
    )
}

export default MyTreatment
