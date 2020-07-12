import React from "react"
import Pen from "./peen.png"
import User from "./user.png"
import Contact from "./contact.png"
import School from "./school.png"
import Work from "./work.png"

import "./about.css"

const About = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="description">
          <h1>Yasmine Kharroubi</h1>
          <hr />
          <h4>Développeur Web React.js</h4>
        </div>
        <div className="resume">
          <div className="content">
            <div className="content-box">
              <div className="resume-box">
                <div className="box-icon">
                  <img src={User} alt="user icon"/>
                </div>
                <span className="box-text">About Me</span>
              </div>
              <div className="resume-box">
                <div className="box-icon">
                <img src={School} alt="school icon"/>
                </div>
                <span className="box-text">Experiences</span>
              </div>
              <div className="resume-box">
                <div className="box-icon">
                  <img src={Work} alt="work icon"/>
                </div>
                <span className="box-text">Projects</span>
              </div>
              <div className="resume-box">
                <div className="box-icon">
                  <img src={Contact} alt="contact icon"/>
                </div>
                <span className="box-text">Contact Me</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
