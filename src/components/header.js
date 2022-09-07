import React, { useState} from 'react'
import logo from '../images/Logo.png';
import './header.css';
import './../index.css'

function Header() {
      const value = false
      const [click, setClick] =useState(value);

      const handleClick = () => {
        setClick(!click)
      }

      return (
        <>
          <nav className="flex justify-between py-8 w-[85%] m-auto" >
            <div className="flex items-center text-xl">
              <div> <img src={logo} alt="logo" className="mr-5"/> </div>
              <a href="index.js"> CRAPPO </a>
            </div> 
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
              <div className='option2 text-2xl p-8' onClick={handleClick}>
                <i className='fas fa-times' /> 
              </div>
              <li className="inline-block lg:mr-10 mb-10 text-xl text-slate-300">Products</li> 
              <li className='inline-block lg:mr-10 mb-10 text-xl text-slate-300'>Features</li>
              <li className='inline-block lg:mr-10 mb-10 text-xl text-slate-300'>About</li>
              <li className='inline-block lg:mr-10 mb-10 text-xl text-slate-300'>Contact</li>
              <div className='inline-block'>
                <li className='inline-block relative mr-5 after:w-0.5 after:h-8 after:absolute after:bg-slate-600 after:-right-5 after:-top-1 after:rounded-lg'>Login</li>
                <li className='inline-block bg-blue-600 rounded-full w-fit px-4 py-2 ml-5'>Register</li>
              </div>
            </ul>
            <div className='option text-2xl' onClick={handleClick}>
              <i className='fas fa-bars' /> 
            </div>
          </nav>
        </>
      );
}

export default Header;
