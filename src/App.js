import { useEffect, useRef, useState } from "react";
import "./App.css";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import AboutSection from "./sections/AboutSection/AboutSection";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import ExpSection from "./sections/ExpSection/ExpSection";
import ProjectSection from "./sections/ProjectSection/ProjectSection";
import EduSection from "./sections/EduSection/EduSection";
import SkillSection from "./sections/SkillSection/SkillSection";
import SkillGridSection from "./sections/SkillGridSection/SkillGridSection";

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabNames = ["About Me", "Experience", "Projects", "Skills", "Contact"];

  const findElementByPrefix = (idValue, arr) => {
    const words = idValue.split("-");
    const secondWord = words[1].trim();
    const index = arr.findIndex((item) => item.startsWith(secondWord));

    return index;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const inViewElementIndex = findElementByPrefix(
              entry.target.id,
              tabNames
            );
            setSelectedTab(inViewElementIndex);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('[id^="section-"]'); // This will select elements with ids starting with "section"

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <SideNavBar
        tabs={tabNames}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {/* <ToggleSwitch /> */}

      <div className="content_body">
        <AboutSection />
        <EduSection />
        <ExpSection />
        <ProjectSection />
        {/* <SkillSection /> */}
        <SkillGridSection />
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default App;
