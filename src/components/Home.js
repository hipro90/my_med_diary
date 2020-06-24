import React from 'react'

import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {
    return (
        <div className="Home">
           <img/>
           <p>Tips of the day</p> 
           <div className="ButtonHomeContainer">
           <button className="homeButton"><Link to='/pillbox' className="homeLink">My Pillbox</Link></button>
           <button className="homeButton"><Link to='/treatment' className="homeLink">My treatment</Link></button>
           <button className="homeButton"><Link to='/diary' className="homeLink">My diary</Link></button>
           </div>
        </div>
    )
}

export default Home
