import React from 'react'
import"../assets/css/Navbar.css";
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='nav'>
    <div className='aa' ><div className="nav__brand">herdoy</div></div>
    <ul className='nav__menu'>
    <li className='nav__item'>Home</li>
    <li className='nav__item'><Link to='/login'>Login</Link></li>
    <li className='nav__item'><Link to='/register'>Register</Link></li>
    <li className='nav__item'><Link to='/destination'>Destination</Link></li>
    <li className='nav__item'><Link to='/booking'>Booking</Link></li>
    </ul>
    <div className='nav__toggler'>
    <div className='line1'></div>
    <div className='line2'></div>
    <div className='line3'></div>
    </div>
    </nav>
  )
}
