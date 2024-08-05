import React from 'react'
import img2 from '../images/profile.jpg'
import './style.css'
import '../fafaicons.js'
const Parallax = (promos) => {
 return (
    <>
        <div onScroll={() =>{
      alert($("div").scrollTop() + " px");
    }}  className="parallax">
        <div className="container1">
        </div>
        <div className="container2">
            <img src={img2} alt="profile photo" className="profile"/>
            <h2>{promos.obj.name}</h2>
            <p>{promos.obj.address}<br/>{promos.obj.city}</p>
            <p>{promos.obj.email}<br/>{promos.obj.phone_no}</p>
            <div className="social">
                <a href="https://www.linkedin.com/in/rudraksh-ab7a73293/"><i className="fa-brands fa-linkedin-in fa-xl"></i></a>
                <a href="https://www.instagram.com/rudr_09_05/"><i className="fa-brands fa-instagram fa-xl"></i></a>
                <a href="https://x.com/EngineerR4545"><i className="fa-brands fa-x-twitter fa-xl"></i></a>
                <a href="https://www.threads.net/@rudr_09_05"><i className="fa-brands fa-threads fa-xl"></i></a>
            </div>
            <button onClick={() => {window.open("../../public/Resume.pdf","_self")}}>Download CV</button>
        </div>
        <div className="container3">
            <div className="container4">

                <p className="p">HELLO, I'M</p>
                <h1>{promos.obj.name}</h1>
                <h3 style={{fontStyle: 'italic'}}>{promos.obj.post}</h3>
            </div>
        </div>
      </div>
    </>
 );  
}
export default Parallax;
