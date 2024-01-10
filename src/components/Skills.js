import React, { useState } from "react";

const Skills = () => {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (index) => {
    setShowDetails((prevDetails) => ({
      ...prevDetails,
      [index]: !prevDetails[index],
    }));
  };

  return (
    <div>
      <h3>Skills</h3>

      <ul className="skills-div">
        <div>
          <div className="div-skills">
            <li>Programming Languages{showDetails[0] ? "▼" : "▶"}</li>
            <button onClick={() => toggleDetails(0)} className="button-skills">
              {showDetails[0] ? "CLOSE" : "OPEN"}
            </button>
          </div>
          <ul
            className="ul-skills"
            style={{ display: showDetails[0] ? "block" : "None" }}
          >
            <li>Python</li>
            <li>JavaScript</li>
            <li>C++</li>
            <li>Java</li>
            <li>c</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <br />

        <div>
          <div className="div-skills">
            <li>Technologies {showDetails[1] ? "▼" : "▶"} </li>
            <button onClick={() => toggleDetails(1)} className="button-skills">
              {showDetails[1] ? "CLOSE" : "OPEN"}
            </button>
          </div>
          <ul style={{ display: showDetails[1] ? "block" : "None" }}>
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>PHP</li>
            <li>OpenCV</li>
            <li>Redis</li>
            <li>Express</li>
            <li>Figma</li>
          </ul>
        </div>
        <br />

        <div>
          <div className="div-skills">
            <li>Operating Systems {showDetails[2] ? "▼" : "▶"}</li>
            <button onClick={() => toggleDetails(2)} className="button-skills">
              {showDetails[2] ? "CLOSE" : "OPEN"}
            </button>
          </div>
          <ul style={{ display: showDetails[2] ? "block" : "None" }}>
            <li>Windows</li>
            <li>Linux</li>
          </ul>
        </div>
        <br />
        <div>
          <div className="div-skills">
            <li>Database {showDetails[3] ? "▼" : "▶"}</li>
            <button onClick={() => toggleDetails(3)} className="button-skills">
              {showDetails[3] ? "CLOSE" : "OPEN"}
            </button>
          </div>
          <ul style={{ display: showDetails[3] ? "block" : "None" }}>
            <li>Mysql</li>
            <li>Postgres</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <br />
      </ul>
    </div>
  );
};

export default Skills;
