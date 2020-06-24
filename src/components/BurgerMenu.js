import React from 'react'
import { Link } from 'react-router-dom'

import { slide as Menu } from 'react-burger-menu'

import './BurgerMenu.css'
 
class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }
 
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="Pillbox" className="menu-item" href="/myPillbox">My Pillbox</a>
        <a id="Diary" className="menu-item" href="/myDiary">My Diary</a>
        <a id="Treatment" className="menu-item" href="/myTreatment">My Treatment</a>
        <a id="history" className="menu-item" href="/myHistory">History</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default BurgerMenu

