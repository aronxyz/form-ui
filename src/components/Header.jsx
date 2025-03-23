import React from 'react'
import Drawer from './Drawer'
import ToggleMode from './ToggleMode'

const Header = () => {
  return (
    <div className='header-wrapper'>
        <header className='hide-on-desktop'>
            <Drawer />
            <img src="brand.svg" alt="" height={40} />
            <div className='header-buttons'>
              <ToggleMode />
            </div>
        </header>
        <header className='hide-on-mobile'>
            <img src="brand.svg" alt="" height={40} />
            <div className='header-buttons'>
              <ToggleMode />
            </div>
        </header>
    </div>
  )
}

export default Header