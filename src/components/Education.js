import React, { useState } from "react";

const Education = () => {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (index) => {
    setShowDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <h3>Education</h3>
      <div className="education-div">
        <dl>
          <dt>
            Stevens Institute of Technology,<br></br> Hoboken, New Jersey
          </dt>
          <dd style={{ display: showDetails[0] ? "block" : "none" }}>
            Expected graduation: Spring 2024
            <br />
            Program: MS in Computer Science
            <br />
            Details: ...
          </dd>
          <button onClick={() => toggleDetails(0)}>Press to know more</button>
        </dl>

        <dl>
          <dt>
            University of Mumbai,<br></br> Mumbai, India
          </dt>
          <dd style={{ display: showDetails[1] ? "block" : "none" }}>
            Graduation Year: June 2021
            <br />
            Program: Bachelor of Engineering in Computer Engineering
            <br />
            Courses – Data Structures, Algorithms, Database Management Systems,
            Web Programming, Mathematical Foundations of Machine Learning,
            Object-Oriented Analysis and Design, Computer Architecture,
            Operating Systems, Computer Networks.
            <br />
            Details: ...
          </dd>
          <button onClick={() => toggleDetails(1)}>Press to know more</button>
        </dl>
      </div>
    </div>
  );
};

export default Education;

// const Education = () => {
//   return (
//     <div>
//       <h3>Education</h3>
//       <div className="education-div">
//         <dl>
//           <dt>Stevens Institute of Technology, Hoboken, New Jersey</dt>
//           <dd>
//             Expected graduation: Spring 2024
//             <br />
//             MS in Computer Science
//           </dd>
//         </dl>

//         <dl>
//           <dt>University of Mumbai</dt>
//           <dd>
//             Graduation Year: June 2021
//             <br />
//             Bachelor of Engineering in Computer Engineering
//             <br />
//             Courses – Data Structures, Algorithms, Database Management Systems,
//             Web Programming, Mathematical Foundations of Machine Learning,
//             Object-Oriented Analysis and Design, Computer Architecture,
//             Operating Systems, Computer Networks.
//           </dd>
//         </dl>
//       </div>
//     </div>
//   );
// };

// export default Education;
