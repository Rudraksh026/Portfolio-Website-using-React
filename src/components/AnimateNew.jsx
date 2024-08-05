import React from "react";
import "./style.css";
import "../linkdin.js";
const AnimateNew = () => {
  return (
    <>
      <div className="go-top">
        <i
          onClick={() => {
            document.getElementById("operation").style.display = "none";
            document.getElementById("close").style.display = "inline";
            document.getElementById("display").style.animation =
              "animate 2s ease-in-out 0s 1 forwards";
          }}
          id="operation"
          className="fa-solid fa-square-minus fa-2xl"
        ></i>
        <i id="close"
        onClick={() => {
          document.getElementById("close").style.display = "none";
          document.getElementById("operation").style.display = "inline";
          document.getElementById("display").style.animation =
            "animate 3s ease-in-out 0s 1 forwards reverse";
            setTimeout(()=>{
            document.getElementById("display").style.removeProperty("animation");
            },1000)
        }}
        class="fa-solid fa-xmark fa-xl"  style={{color:"white",display:"none",zIndex:500}}></i>
        <div
          id="display"
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="rudraksh-ab7a73293"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://in.linkedin.com/in/rudraksh-ab7a73293?trk=profile-badge"
          ></a>
          <iframe height={300} width={300} src= "../../temp.html" style={{border:0}} title="GeeksforGeeks"> 
                </iframe> 
        </div>

        <a href="#top">
          <i className="fa-solid fa-arrow-up fa-xl"></i>
        </a>
      </div>
    </>
  );
};
export default AnimateNew
