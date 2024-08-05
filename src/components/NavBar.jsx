import React from 'react'
import './style.css'
const NavBar = (promos) => {
  return (
    <>
    <nav id="top">
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo">{promos.obj.name}</label>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#education-project">Education & Projects</a></li>
            <li><a href="#skills">Skills & Languages</a></li>
            <li><a href="#certification">Certification & Interests</a></li>
        </ul>
    </nav>
    </>
  );
}
export default NavBar
