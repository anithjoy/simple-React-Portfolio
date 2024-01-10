import React, { useState } from "react";

const Projects = () => {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (index) => {
    setShowDetails((prevDetails) => ({
      ...prevDetails,
      [index]: !prevDetails[index],
    }));
  };

  return (
    <div>
      <h3>Projects</h3>
      <div className="div-project">
        <div className="div-1-project">
          <h4>
            Biometric Identification System using GAIT Analysis{" "}
            {showDetails[0] ? "▼" : "▶"}
          </h4>
          <button onClick={() => toggleDetails(0)} className="button-project">
            Know More{showDetails[0] ? "▼" : "▶"}
          </button>
        </div>

        <ul style={{ display: showDetails[0] ? "block" : "None" }}>
          <li>
            Researched and implemented numerous techniques and methodologies to
            devise a feasible Biometric Identification System using GAIT
            Analysis.
          </li>
          <li>
            Employed techniques such as Background Extraction, feature
            extraction techniques, auto focusing on subject to compare two
            images.
          </li>
          <li>
            Implemented open-source computer vision and TensorFlow machine
            learning packages in python.
          </li>
          <li>Researched Human GAIT Cycle and its entropy images.</li>
        </ul>
      </div>

      <div className="div-project">
        <div className="div-1-project">
          <h4>Project Management Application {showDetails[1] ? "▼" : "▶"}</h4>
          <button onClick={() => toggleDetails(1)} className="button-project">
            Know More{showDetails[1] ? "▼" : "▶"}
          </button>
        </div>

        <ul style={{ display: showDetails[1] ? "block" : "None" }}>
          <li>
            Developed a Web Application for managing various projects and tasks
            for the user in NodeJS environment.
          </li>
          <li>
            Led the development project by coming up with a roadmap and
            direction for the team to follow and was primarily responsible for
            implementing key features of the project.
          </li>
          <li>
            Developed back-end functionality with NodeJS and MongoDB and
            frontend with HTML, CSS, and JavaScript.
          </li>
        </ul>
      </div>

      <div className="div-project">
        <div className="div-1-project">
          <h4>Chat Bot {showDetails[2] ? "▼" : "▶"}</h4>
          <button onClick={() => toggleDetails(2)} className="button-project">
            Know More{showDetails[2] ? "▼" : "▶"}
          </button>
        </div>

        <ul style={{ display: showDetails[2] ? "block" : "None" }}>
          <li>
            Developed a chatbot for educational purpose in multilingual
            languages using python.
          </li>
          <li>
            Research and presented the development and application of the chat
            bot to my peers.
          </li>
        </ul>
      </div>

      <div className="div-project">
        <div className="div-1-project">
          <h4>Hotel Room Booking Website {showDetails[3] ? "▼" : "▶"}</h4>
          <button onClick={() => toggleDetails(3)} className="button-project">
            Know More{showDetails[3] ? "▼" : "▶"}
          </button>
        </div>

        <ul style={{ display: showDetails[3] ? "block" : "None" }}>
          <li>
            Designed and developed a website to book hotel rooms online using
            HTML, CSS, JavaScript, and Bootstrap
          </li>
        </ul>
      </div>

      <div className="div-project">
        <div className="div-1-project">
          <h4>
            Distance sensing using Arduino Uno Processor{" "}
            {showDetails[4] ? "▼" : "▶"}
          </h4>
          <button onClick={() => toggleDetails(4)} className="button-project">
            Know More{showDetails[4] ? "▼" : "▶"}
          </button>
        </div>

        <ul style={{ display: showDetails[4] ? "block" : "None" }}>
          <li>
            Led the team by outlining the process of executing the project and
            oversaw the design and development process.
          </li>
          <li>
            Worked on implementing and testing the Distance Sensing algorithm.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
