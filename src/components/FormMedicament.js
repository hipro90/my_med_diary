import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../Firebase/Config'
import './FormMedicament.css'
import Write from '../Firebase/Write'


const Modal = (props) => {

    const item = {
        id: '',
        nom: '',
        quantiteParPrise: '',
        present: false,
        matin: false,
        midi: false,
        soir: false,
        debut: '',
        fin: ''
    }
    const [data, setData] = useState(item)


    const handleChange = e => {
        setData({ ...data, [e.target.id]: e.target.checked })
    }

    const handleChangeInput = e => {
        console.log(e.target.value)
        setData({ ...data, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Write(collection, data)
        setData(item)
    }
    const { nom, quantiteParPrise, present, matin, midi, soir, debut, fin } = data

    const collection = 'medicament'

    return (
        props.showModal && (
            <>
                <div className="modal-overlay"></div>
                <div className="modal-holder">
                    <div className="modal">
                        <span className="modal__close">
                            <FontAwesomeIcon icon={faTimes} className="modal__close" onClick={props.closeModal} />
                        </span>
                        <div className="modal__header">
                            <h3>Add a medicine</h3>
                        </div>
                        <div className="modal__description">
                            <form className="form" onSubmit={handleSubmit}>
                                <label className='nom-med'>Medicine name</label>
                                <input className='text-info' id='nom' value={nom} onChange={handleChangeInput} autoComplete='off' />

                                <label className='nom-med'>Quantity</label>
                                <input className='text-info' id='quantiteParPrise' value={quantiteParPrise} onChange={handleChangeInput} autoComplete='off' />
                                <div className='inputDate'>
                                    <label htmlFor='debut'>Starting</label>
                                    <input type='date' id='debut'  onChange={handleChangeInput}/>

                                    <label htmlFor='fin'>Until</label>
                                    <input type='date' id='fin'  onChange={handleChangeInput}/>
                                </div>
                                <div className='checkbox'>
                                    <div className='container-checks'>
                                        <input className='text-casse' type='checkbox' id='present' checked={present} onChange={handleChange} />
                                        <label className='nom-med'>Add in Pillbox</label>
                                    </div>
                                    <div className='container-checks'>
                                        <input className='text-casse' type='checkbox' id='matin' checked={matin} onChange={handleChange} />
                                        <label className='nom-med'>Morning</label>
                                    </div>
                                    <div className='container-checks'>
                                        <input className='text-casse' type='checkbox' id='midi' checked={midi} onChange={handleChange} />
                                        <label className='nom-med'>Midday</label>
                                    </div>
                                    <div className='container-checks'>
                                        <input className='text-casse' type='checkbox' id='soir' checked={soir} onChange={handleChange} />
                                        <label className='nom-med'>Afternoon</label>
                                        <button className="button" value="send" onClick={() => props.callDataBase()} type="submit">Registrer</button>
                                    </div>
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
