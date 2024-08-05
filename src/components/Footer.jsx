import React from "react"
import './style.css'
const Footer = () => {
  return (
    <>
        <div onmouseenter="myFunction()" className="footer">
                <div className="footer-1"><h1>I'd love to hear from you.</h1></div>
                <div className="footer-2">
                    <p className="year">rudrakshmishra026@gmail.com</p>
                    <p className="year">+91 8755443383</p>
                </div>
                <div className="footer-3">
                    <div className="footer-social">
                        <a href="https://www.linkedin.com/in/rudraksh-ab7a73293/"><i className="fa-brands fa-linkedin-in fa-xl"></i></a>
                <a href="https://www.instagram.com/rudr_09_05/"><i className="fa-brands fa-instagram fa-xl"></i></a>
                <a href="https://x.com/EngineerR4545"><i className="fa-brands fa-x-twitter fa-xl"></i></a>
                <a href="https://www.threads.net/@rudr_09_05"><i className="fa-brands fa-threads fa-xl"></i></a>
                    </div>
                </div>
                <div className="footer-4">
                    <button onClick={() => {window.open("../../public/Resume.pdf","_self")}}>Download CV</button>
                </div>
            </div>
    </>
  );
}
export default Footer