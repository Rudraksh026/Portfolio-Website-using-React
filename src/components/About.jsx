import React from 'react'
import './style.css'
import '../fafaicons.js'
const About = (promos) => {
  return (<>
    <div className="about" id="about">
            <div className="content">
                <h2>About</h2>
                <p className="title">MY BACKGROUND</p>
                <p className="data-for-background">{promos.obj.description}</p>
            </div>
    </div>
  </>);
}
export default About;
