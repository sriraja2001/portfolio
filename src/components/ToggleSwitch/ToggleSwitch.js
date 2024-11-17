import { useState } from "react";
import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className={styles.toggle_body}
      style={{
        backgroundColor: toggle ? "white" : "black",
        borderColor: toggle ? "rgb(224, 224, 224)" : "black",
      }}
      onClick={() => {
        setToggle((curr) => {
          return !curr;
        });
      }}
    >
      <div
        className={styles.switch}
        style={{
          marginLeft: !toggle ? "40px" : "0px",
          marginRight: toggle ? "40px" : "0px",
        }}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
