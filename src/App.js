import { useState } from "react";
import "./App.css";
import SideNavBar from "./components/SideNavBar/SideNavBar";

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabNames = ["About Me", "Experience", "Projects", "Skills", "Contact"];

  return (
    <div className="App">
      <SideNavBar
        tabs={tabNames}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </div>
  );
}

export default App;
