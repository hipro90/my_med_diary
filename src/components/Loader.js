import React, { useEffect, useState } from 'react'
import MMDLogo from './../images/mmd-logo.png'

import './Loader.css'

const Loader = () =>{
    const [load, setLoad] = useState(false)
    useEffect(() => {
      setTimeout(() => {
        setLoad(true)
      }, 3000)
    }, [])
    return(
        <div className='logo-container'>
            <img src={MMDLogo} alt='Logo My Med Daily' className='mmd-logo' />
        </div>
    )
}

export default Loader