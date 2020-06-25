import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import MMDLogo from './../images/mmd-logo.png'

import './Home.css'

const Home = () => {
    return (
        <div className="Home">
           <img src={MMDLogo} alt='Logo My Med Daily' className='mmd-logo' />
            <FontAwesomeIcon icon={faSmile} className='icon-home' />
           <h1 className='tips'>Tips of the day</h1> 
           <div className="ButtonHomeContainer">
           <button className="homeButton"><Link to='/myPillbox' className="homeLink">My Pillbox</Link></button>
           <button className="homeButton"><Link to='/myTreatment' className="homeLink">My treatment</Link></button>
           <button className="homeButton"><Link to='/myDiary' className="homeLink">My diary</Link></button>
           </div>
        </div>
    )
}

export default Home
