import React, { useState } from 'react'
import Modal from './../components/FormMedicament'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

<<<<<<< HEAD
import './MyTreatment.css'

const MyTreatment = () => {
    const[openModal, setOpenModal] = useState(false);
    const showModal = ()=> { 
        setOpenModal(true)
    }
    const closeModal = ()=> {
        setOpenModal(false)
    }
    return (
        <>
        <h1>My Treatment</h1>
        <div onClick={() =>showModal()} className='container-more'>
        <form className="formMore">
            <div className='container-checks'>
            <FontAwesomeIcon icon={faTimesCircle} className='icon' />
            <label className='nom-med'>Medecine</label>
            </div>
        </form>
        <FontAwesomeIcon icon={faPlusCircle} className='iconMore' /></div>
        <div><Modal showModal={openModal} closeModal={closeModal} /></div>
        </>
=======
const MyTreatment = (props) => {
    return (
        <div>
        </div>
>>>>>>> 9bc6daebc69856b9170bcdb53b3020400ceebd5e
    )
}

export default MyTreatment
