import Scrollspy from "react-scrollspy";

import "./App.css";
import Objective from "./components/Objective";
import Starter from "./components/Starter";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import ExtraCurr from "./components/ExtraCurr";

function App() {
  return (
    <div className="App">
      <Scrollspy
        items={[
          "Aboutme",
          "Education",
          "Skills",
          "Projects",
          "Certifications",
          "Extra-Curriculum",
        ]}
        currentClassName="is-current"
      >
        {/* <TempComponent /> */}
        <Starter id="Aboutme" />
        <br />
        <Objective id="Aboutme" />
        <br />
        <br />

        <Education id="Education" />
        <br />
        <br />
        <Skills id="Skills" />
        <br />
        <br />
        <Projects id="Projects" />
        <br />
        <br />
        <Certifications id="Certifications" />
        <br />
        <br />
        <ExtraCurr id="Extra-Curriculum" />
        <br />
        <br />
      </Scrollspy>

      {/* I have to make form here to accept  */}
    </div>
  );
}

export default App;
