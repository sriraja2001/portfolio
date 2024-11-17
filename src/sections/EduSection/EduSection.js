import styles from "./EduSection.module.css";
import ucscLogo from "../../res/ucsc-logo.png";
import psgLogo from "../../res/psg-logo.png";

const EduSection = () => {
  return (
    <div className={styles.body}>
      <div className={styles.title} id="Education">
        Education
      </div>
      <div className={styles.edu_list}>
        <EduTile
          name={"University of California, Santa Cruz"}
          degree={"M.S in Computer Science Engineering"}
          duration={"Expected Graduation: 2026"}
          logo={ucscLogo}
        />
        <EduTile
          name={"P.S.G College of Technology"}
          degree={"B.E in Computer Science Engineering"}
          duration={"Graduated: 2024"}
          logo={psgLogo}
        />
      </div>
    </div>
  );
};

const EduTile = (props) => {
  return (
    <div className={styles.tile_body}>
      <div className={styles.content}>
        <img className={styles.logo} src={props.logo} />
        <div className={styles.uni_details}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.degree}>{props.degree}</div>
          <div className={styles.duration}>{props.duration}</div>
        </div>
      </div>
    </div>
  );
};

export default EduSection;
