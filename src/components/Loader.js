import React, { useEffect, useState } from 'react'
import MMDLogo from './../images/mmd-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom'

import './Loader.css'

const Loader = () =>{
    const [load, setLoad] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setLoad(true)
      }, 2000)
    }, [])

    return load 
    ? <Redirect to='/Home' /> 
    : (
        <div className='logo-container'>
            <img src={MMDLogo} alt='Logo My Med Daily' className='mmd-logo' />
            <FontAwesomeIcon icon={faSmile} className='icon-loader' />
        </div>
    )
}

export default Loader

