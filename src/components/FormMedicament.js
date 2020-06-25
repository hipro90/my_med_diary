import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './FormMedicament.css'

const Modal = ({showModal,closeModal}) =>{
    return(
        showModal && (
            <>
            <div class="modal-overlay"></div>
            <div class="modal-holder">
                <div class="modal">
                    <span className="modal__close">
                        <FontAwesomeIcon icon={faTimes} className="modal__close" onClick={closeModal} /> 
                    </span>
                    <div className="modal__header">
                    <h3>To add a medicine</h3>            
                    </div>
                        <div className="modal__description">                 
                            <form className="form">
                                <label className='nom-med'>Name's medicine</label>
                                <input className='text-info' />

                                <label className='nom-med'>Quantity</label>
                                <input className='text-info' />

                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' />
                                <label className='nom-med'>Already existant</label>
                                </div>
                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' />
                                <label className='nom-med'>Morning</label>
                                </div>
                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' />
                                <label className='nom-med'>Midday</label>
                                </div>
                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' />
                                <label className='nom-med'>Aftenoon</label>
                                
                                <button className="button" value="send">Registrer</button> 
                                </div>                        
                            </form>
                        </div>
                     </div>
                </div>           
            </>
        )
       
     )
}

export default Modal
