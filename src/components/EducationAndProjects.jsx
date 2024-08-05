import React from 'react'
import './style.css'
const EducationAndProjects = () => {
    
    return (
        <>
            <div className="education-project" id="education-project">
            <div className="content-education">
                <div className="education">
                    <h2>Education</h2>
                <p className="title">WHAT I'VE LEARNED</p>
                <p className="data-for-background">
                    <p class="year">2024 - Present</p>
                    <p class="area">G. B. Pant University of Agriculture and Technology - B.Tech in Information Technology</p>
                    <p className="year">2021 - 2024</p>
                    <p className="area">Govt. Polytechnic Narendra Nagar - Diploma in Information Technology</p>
                    <p className="year">2020 - 2021</p>
                    <p className="area">Modern School Rishikesh - High School in Science</p>
                </p>
                </div>
                <div className="projects">
                    <h2>Projects</h2>
                <p className="title">WHAT I'VE MADE</p>
                <p className="data-for-background">
                    <p className="year">2024 - 2024</p>
                    <p className="area">Library Management System For Govt. Polytechnic Narendra Nagar</p>
                    <p className="year">2023 - 2023</p>
                    <p className="area">Guess the Number Game Development for Android Devices</p>
                    <p className="year">2022 - 2022</p>
                    <p className="area">IOT Senser Based Smart Bin</p>
                </p>
                </div>
            </div>
          </div>
        </>
    );
}
export default EducationAndProjects