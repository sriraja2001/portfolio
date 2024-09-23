import { useRef, useState } from "react";
import "./App.css";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import AboutSection from "./sections/AboutSection/AboutSection";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import ExpSection from "./sections/ExpSection/ExpSection";
import ProjectSection from "./sections/ProjectSection/ProjectSection";

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabNames = ["About Me", "Experience", "Projects", "Skills", "Contact"];

  const pageScrollHandler = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    // console.log("scrollTop:", scrollTop); // Current scroll position from the top
    // console.log("scrollHeight:", scrollHeight); // Total height of the content
    // console.log("clientHeight:", clientHeight); // Height of the visible area
    if (scrollTop <= 400) {
      setSelectedTab(0);
    } else if (scrollTop <= 800) {
      setSelectedTab(1);
    } else if (scrollTop <= 1200) {
      setSelectedTab(2);
    } else if (scrollTop <= 1800) {
      setSelectedTab(3);
    } else if (scrollTop <= 2400) {
      setSelectedTab(4);
    }
  };

  return (
    <div
      className="App"
      onScroll={pageScrollHandler}
      style={{
        height: "100vh",
        width: "100vw",
        overflowY: "scroll",
      }}
    >
      <SideNavBar
        tabs={tabNames}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {/* <ToggleSwitch /> */}

      <div className="content_body">
        <AboutSection />
        <ExpSection />
        <ProjectSection />
      </div>
      <div style={{ height: "400px" }}></div>
      <div style={{ height: "400px" }}></div>
      <div style={{ height: "400px" }}></div>
      <div style={{ height: "600px" }}></div>
      <div style={{ height: "600px" }}></div>
      <div style={{ height: "300px" }}></div>
    </div>
  );
}

export default App;
