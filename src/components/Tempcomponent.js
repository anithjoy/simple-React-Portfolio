// import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const TempComponent = () => {
//   const skillsData = [
//     { skill: "Python", percentage: 95 },
//     { skill: "JavaScript", percentage: 95 },
//     { skill: "C++", percentage: 90 },
//     { skill: "Java", percentage: 90 },
//     { skill: "C", percentage: 85 },
//     { skill: "HTML", percentage: 95 },
//     { skill: "CSS", percentage: 95 },
//     { skill: "NodeJS", percentage: 95 },
//     { skill: "ReactJS", percentage: 95 },
//     { skill: "PHP", percentage: 85 },
//     { skill: "OpenCV", percentage: 85 },
//     { skill: "Redis", percentage: 95 },
//     { skill: "Express", percentage: 92 },
//     { skill: "Figma", percentage: 95 },
//     { skill: "MathLab", percentage: 80 },
//     { skill: "MySQL", percentage: 93 },
//     { skill: "PostgreSQL", percentage: 85 },
//     { skill: "MongoDB", percentage: 95 },

//     // Add more skills with their percentages here
//   ];

//   return (
//     <div className="skills-div">
//       <h3>SKILLS</h3>

//       {skillsData.map((skill, index) => (
//         <div key={index}>
//           <p>{skill.skill}</p>
//           <div style={{ width: "100px", height: "100px" }}>
//             <CircularProgressbar
//               value={skill.percentage}
//               text={`${skill.percentage}%`}
//               styles={buildStyles({
//                 textColor: "#fff",
//                 pathColor: `rgba(62, 152, 199, ${skill.percentage / 100})`,
//                 trailColor: "#d6d6d6",
//               })}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TempComponent;

// const TempComponent = () => {
//   const skills = [
//     { name: "Python", percentage: 80 },
//     { name: "JavaScript", percentage: 75 },
//     { name: "C++", percentage: 70 },
//     { name: "Java", percentage: 65 },
//     { name: "HTML", percentage: 85 },
//     { name: "CSS", percentage: 80 },
//     { name: "NodeJS", percentage: 70 },
//     { name: "ReactJS", percentage: 75 },
//     { name: "PHP", percentage: 60 },
//     { name: "OpenCV", percentage: 65 },
//     { name: "Redis", percentage: 50 },
//     { name: "Express", percentage: 70 },
//     { name: "Figma", percentage: 80 },
//     { name: "MySQL", percentage: 75 },
//     { name: "PostgreSQL", percentage: 70 },
//     { name: "MongoDB", percentage: 60 },
//   ];

//   return (
//     <div>
//       <h3>Skills</h3>
//       <div className="skills-container">
//         {skills.map((skill, index) => (
//           <div key={index} className="skill">
//             <div className="skill-name">{skill.name}</div>
//             <div className="skill-meter">
//               <div
//                 className="skill-progress"
//                 style={{ width: `${skill.percentage}%` }}
//               >
//                 {skill.percentage}%
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TempComponent;

// import React from "react";
// import { Link } from "react-scroll";
// // import "../styles/Navbar.css";

// const TempComponent = () => {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link
//             activeClass="active"
//             to="objective"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             Objective
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             activeClass="active"
//             to="education"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             Education
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             activeClass="active"
//             to="skills"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             Skills
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             activeClass="active"
//             to="projects"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             Projects
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             activeClass="active"
//             to="certifications"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             Certifications
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link
//             activeClass="active"
//             to="extracurr"
//             spy={true}
//             smooth={true}
//             offset={-70}
//             duration={500}
//           >
//             Extra-curricular Activities
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default TempComponent;
