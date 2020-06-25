import React, { useState } from 'react'
import Modal from './../components/FormMedicament'

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
        <div onClick={() =>showModal()} >kkk</div>
        <div><Modal showModal={openModal} closeModal={closeModal} /></div>
        </>
    )
}

export default MyTreatment
