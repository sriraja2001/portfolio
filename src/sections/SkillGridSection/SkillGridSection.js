import { useState } from "react";
import styles from "./SkillGridSection.module.css";

const SkillGridSection = () => {
  const [animationStart, setAnimationStart] = useState(false);

  return (
    <div className={styles.body}>
      <div
        className={`${styles.grid} ${
          animationStart ? styles.animation_grid : ""
        }`}
        id="grid"
      >
        <div
          className={styles.item1}
          key={1}
          onMouseEnter={() => {
            setAnimationStart(true);
          }}
          //   onMouseLeave={() => {
          //     const grid = document.querySelector("#grid");
          //     grid.style.gridTemplateAreas = '"a b c" "d e f"';
          //   }}
        >
          1
        </div>
        <div className={styles.item2} key={2}>
          2
        </div>
        <div className={styles.item3} key={3}>
          3
        </div>
        <div className={styles.item4} key={4}>
          4
        </div>
        <div className={styles.item5} key={5}>
          5
        </div>
        <div className={styles.item6} key={6}>
          6
        </div>
      </div>
    </div>
  );
};

export default SkillGridSection;
