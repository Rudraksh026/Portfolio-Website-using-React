import React from 'react'
import './style.css'
const Skills = () => {
  return (
    <>
        <div  className="skills" id="skills">
            <h2>Skills & Languages</h2>
            <p className="title">WHAT I BRING TO THE TABLE</p>
            <div className="content-skill">
                <div className="skill-name year">Full Stack Development</div>
                <div className="skill-range"><hr className="1"/></div>
                <div className="skill-name year">Software Development</div>
                <div className="skill-range"><hr className="1"/></div>
                <div className="skill-name year">Android Application Development</div>
                <div className="skill-range"><hr className="1"/></div>
                <div className="skill-name year">Leadership</div>
                <div className="skill-range"><hr className="1"/></div>
                <div className="skill-name year">Data Analysis</div>
                <div className="skill-range"><hr className="1"/></div>
                <div className="skill-name year">Image & Video Editing</div>
                <div className="skill-range"><hr className="1"/></div>
            </div>
            <br/>
            <hr style={{width: 100}}/>
            <br/>
            <div className="content-skill">
                <div className="skill-name year">English</div>
                <div className="skill-range"><hr className="1"/></div>
                <div className="skill-name year">Hindi</div>
                <div className="skill-range"><hr className="1"/></div>
            </div>
        </div>
    </>
  );
}
export default Skills