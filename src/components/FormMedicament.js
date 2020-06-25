import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './FormMedicament.css'
import Write from '../Firebase/Write'



const Modal = ({showModal,closeModal}) =>{

    const newData = {
        id: '',
        name :'',
        quantity: '',
        isPresent: '',
        morning: false,
        midday: false,
        afternoon:false
    }
    const [data, setData] = useState(newData)
    
    const handleChange = e => {
        setData({...data, [e.target.id]: e.target.value})
    }

    const { id, name, quantity, isPresent, morning, midday, afternoon} = data

    const collection = 'medicament'
    
    return(
        showModal && (
            <>
            <div className="modal-overlay"></div>
            <div className="modal-holder">
                <div className="modal">
                    <span className="modal__close">
                        <FontAwesomeIcon icon={faTimes} className="modal__close" onClick={closeModal} /> 
                    </span>
                    <div className="modal__header">
                    <h3>To add a medicine</h3>            
                    </div>
                        <div className="modal__description">                 
                            <form className="form">
                                <label className='nom-med'>Name's medicine</label>
                                <input className='text-info' id='name' value={name} onChange={handleChange}/>

                                <label className='nom-med'>Quantity</label>
                                <input className='text-info' id='quantity' value={quantity} onChange={handleChange}  />

                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' id='isPresent' value={isPresent} onChange={handleChange}  />
                                <label className='nom-med'>Already existant</label>
                                </div>
                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' id='morning' value={morning} onChange={handleChange}  />
                                <label className='nom-med'>Morning</label>
                                </div>
                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' id='midday' value={midday} onChange={handleChange}  />
                                <label className='nom-med'>Midday</label>
                                </div>
                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' id='afternoon' value={afternoon} onChange={handleChange} />
                                <label className='nom-med'>Aftenoon</label>
                
                                <button className="button" value="send" onClick={() => Write(collection, data)}>Registrer</button> 
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
