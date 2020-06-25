import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../Firebase/Config'
import './FormMedicament.css'
import Write from '../Firebase/Write'




const Modal = ({showModal,closeModal}) =>{


    const item = {
        id: '',
        name :'',
        quantity: '',
        present: false,
        morning: false,
        midday: false,
        afternoon:false
    }
    const [data, setData] = useState(item)
    

    const handleChange = e => {
        setData({...data, [e.target.id]: e.target.checked})
    }

    const handleChangeInput = e => {
        setData({...data, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Write(collection, data)
        setData(item)
}
    const { name, quantity, present, morning, midday, afternoon} = data

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
                    <h3>Add a medicine</h3>            
                    </div>
                        <div className="modal__description">                 
                            <form className="form" onSubmit={handleSubmit}>
                                <label className='nom-med'>Medicine name</label>
                                <input className='text-info' id='name' value={name} onChange={handleChangeInput} autoComplete='off'/>

                                <label className='nom-med'>Quantity</label>
                                <input className='text-info' id='quantity' value={quantity} onChange={handleChangeInput} autoComplete='off' />

                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' id='present' checked={present} onChange={handleChange}  />
                                <label className='nom-med'>Add in Pillbox</label>
                                </div>
                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' id='morning' checked={morning} onChange={handleChange}  />
                                <label className='nom-med'>Morning</label>
                                </div>
                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' id='midday' checked={midday} onChange={handleChange}  />
                                <label className='nom-med'>Midday</label>
                                </div>
                                <div className='container-checks'>
                                <input className='text-casse' type='checkbox' id='afternoon' checked={afternoon} onChange={handleChange} />
                                <label className='nom-med'>Afternoon</label>
                
                                <button className="button" value="send" type="submit">Registrer</button> 
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
