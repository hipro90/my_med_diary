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
        <div className='banniere'>
            <BurgerMenu/>
            <h1 className='myTreatment'>My Treatment</h1>
        </div>
        <div onClick={() =>showModal()} className='container-more'>
        <form className="formMore">
            <div className='container-checks'>
            <FontAwesomeIcon icon={faTimesCircle} className='icon' />
            <label className='nom-med'>Medicine</label>
            </div>                              
        </form>
        <FontAwesomeIcon icon={faPlusCircle} className='iconMore' /></div>
        <div><Modal showModal={openModal} closeModal={closeModal} /></div>
        </>
    )
}

export default MyTreatment
