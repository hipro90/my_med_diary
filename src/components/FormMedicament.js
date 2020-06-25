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
                    <h3>Ajouter un medicament&nbsp;!</h3>            
                    </div>
                        <div className="modal__description">                 
                            <form className="form">
                                <label className='nom-med'>Nom du médicament</label>
                                <input className='text-info' />

                                <label className='nom-med'>Quantité prise</label>
                                <input className='text-info' />
                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' />
                                <label className='nom-med'>Matin</label>
                                </div>
                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' />
                                <label className='nom-med'>Midi</label>
                                </div>
                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' />
                                <label className='nom-med'>Soir</label>
                                
                                <button className="button" value="send">Enregistrer</button> 
                                </div>                        
                            </form>
                        <p className="text"></p>
                        </div>
                     </div>
                </div>           
            </>
        )
       
     )
}

export default Modal
