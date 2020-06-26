import React from 'react'
import { Link } from 'react-router-dom'

import { stack as Menu } from 'react-burger-menu'

import './BurgerMenu.css'

class BurgerMenu extends React.Component {
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu disableAutoFocus>
        <Link id="home" className="menu-item" to="/Home">Home</Link>
        <Link id="Pillbox" className="menu-item" to="/myPillbox">My Pillbox</Link>
        <Link id="Diary" className="menu-item" to="/myDiary">My Diary</Link>
        <Link id="Treatment" className="menu-item" to="/myTreatment">My Treatment</Link>
        <Link id="history" className="menu-item" to="/myHistory">History</Link>
      </Menu>
    );
  }
}

export default BurgerMenu

