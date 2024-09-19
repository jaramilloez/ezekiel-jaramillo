import React from "react";

const Skills = () => {
  return (
    <div className="section">
      <div className="header">MY SKILLS</div>
      <div className="fs-3 d-flex flex-wrap justify-content-center px-5">
        <div className="skillsItem">
          <img
            src={require("../images/javaScript.png")}
            alt="JavaScript"
            className="skillsIcon"
          />
          <div className="skillsItemText">JavaScript</div>
        </div>
        <div className="skillsItem">
          <img
            src={require("../images/nodejs.png")}
            alt="Node.js"
            className="skillsIcon"
          />
          <div className="skillsItemText">Node.js</div>
        </div>
        <div className="skillsItem">
          <img
            src={require("../images/react.png")}
            alt="React"
            className="skillsIcon"
          />
          <div className="skillsItemText">React</div>
        </div>
        <div className="skillsItem">
          <img
            src={require("../images/jQuery.png")}
            alt="jQuery"
            className="skillsIcon"
          />
          <div className="skillsItemText">jQuery</div>
        </div>
        <div className="skillsItem">
          <img
            src={require("../images/expressjs.png")}
            alt="Express.js"
            className="skillsIcon"
          />
          <div className="skillsItemText">Express.js</div>
        </div>
        <div className="skillsItem">
          <img
            src={require("../images/html5.png")}
            alt="HTML"
            className="skillsIcon"
          />
          <div className="skillsItemText">HTML</div>
        </div>
        <div className="skillsItem">
          <img
            src={require("../images/css3.png")}
            alt="CSS"
            className="skillsIcon"
          />
          <div className="skillsItemText">CSS</div>
        </div>
        <div className="skillsItem">
          <img
            src={require("../images/bootstrap.png")}
            alt="Bootstrap"
            className="skillsIcon"
          />
          <div className="skillsItemText">Bootstrap</div>
        </div>
        <div className="skillsItem">
          <img
            src={require("../images/mongoDB.png")}
            alt="MongoDB"
            className="skillsIcon"
          />
          <div className="skillsItemText">MongoDB</div>
        </div>
        <div className="skillsItem">
          <img
            src={require("../images/mySQL.png")}
            alt="MySQL"
            className="skillsIcon"
          />
          <div className="skillsItemText">MySQL</div>
        </div>
        <div className="skillsItem">
          <img
            src={require("../images/git.png")}
            alt="Git"
            className="skillsIcon"
          />
          <div className="skillsItemText">Git</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
