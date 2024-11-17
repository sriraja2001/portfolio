import { useState } from "react";
import styles from "./SkillSection.module.css";
import expandIcon from "../../res/up-arrow.png";
import collapseIcon from "../../res/down-arrow.png";

const SkillSection = () => {
  return (
    <div className={styles.body} id="section-Skills">
      <div className={styles.title} id="Skills">
        Skills
      </div>
      <SkillTile
        categoryName={"Programming Languages"}
        skills={["Python", "Java", "C", "C++", "JavaScript"]}
      />
      <SkillTile
        categoryName={"Web Development"}
        skills={[
          "ReactJS",
          "HTML/CSS",
          "Spring Boot",
          "Node.js",
          "Flask",
          "PHP",
        ]}
      />
      <SkillTile
        categoryName={"Data Management & Analytics"}
        skills={["SQL", "MongoDB", "Apache Spark", "Kafka", "Azure Event Hub"]}
      />
      <SkillTile
        categoryName={"Machine Learning & AI"}
        skills={[
          "Neural Networks",
          "Reinforcement Learning",
          "Convolutional Neural Networks",
          "NLP",
        ]}
      />
      <SkillTile
        categoryName={"Cloud & DevOps"}
        skills={["AWS", "Azure", "Terraform", "Bicep", "YML-CI/CD"]}
      />
      <SkillTile
        categoryName={"Mobile Application Development"}
        skills={["Android Studio (Android)", "XCode (iOS)", "Flutter"]}
      />
    </div>
  );
};

const SkillTile = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={styles.skill_tile}
      style={{ height: isExpanded || isHovered ? "92px" : "30px" }}
      //   onMouseEnter={() => setIsHovered(true)}
      //   onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.skill_category}
        onClick={() => setIsExpanded(() => !isExpanded)}
      >
        {props.categoryName}
        <img
          className={styles.expand_icon}
          src={collapseIcon}
          style={{ transform: isExpanded ? "rotate(-180deg)" : "rotate(0deg)" }}
        />
      </div>
      <div className={styles.skill_content}>
        {props.skills.map((skill) => (
          <div className={styles.pill_body}>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
