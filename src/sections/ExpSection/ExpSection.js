import styles from "./ExpSection.module.css";
import msLogo from "../../res/ms_logo.png";
import niqoLogo from "../../res/niqo_logo.png";
import nusLogo from "../../res/nus_logo.png";
import linkIcon from "../../res/link_icon.png";

const ExpSection = () => {
  return (
    <div className={styles.body}>
      <div className={styles.title}>Experience</div>
      <div className={styles.exp_list}>
        <ExpTile
          isStart
          title={"Consultant, Microsoft India"}
          tenure={"August 2023 - August 2024"}
          description={
            "Playing a pivotal role within the Azure-Data and AI division, actively developing cloud deployment tools. Worked with international clients, including the London Stock Exchange and FedEx."
          }
          logo={msLogo}
        />
        <ExpTile
          title={"Full Stack Developer Intern, NIQO Robotics"}
          tenure={"February 2023 - July 2023"}
          description={
            "Spearheaded the front-end development for a cutting-edge Robot Fleet Management System using React JS, ensuring a seamless user experience. Utilized Spring Boot and Node.js to create robust backends for diverse applications, following the MVC design pattern for optimal system structure."
          }
          logo={niqoLogo}
          certificateDescription={"Certificate of Completion"}
        />
        <ExpTile
          title={"Student Intern, National University of Singapore"}
          tenure={"December 2022 - January 2023"}
          description={
            "Developed a body posture detection model by using convolutional neural networks and transfer learning to detect the human joint coordinates from RGB images, followed by the prediction of posture using multiple linear regression."
          }
          logo={nusLogo}
          certificateDescription={
            "Completion Certificate & Letter of Recommendation"
          }
        />
        <ExpTile
          isEnd
          title={"Associate Consultant Intern, Microsoft India"}
          tenure={"June 2023 - August 2023"}
          description={
            "Utilized Apache Spark and Azure Event Hubs in a cloud-based infrastructure to ingest massive amounts of real-time Twitter tweets, and then deciphered the general opinion about any given topic by applying sentiment analysis on the captured tweets."
          }
          logo={msLogo}
          certificateDescription={"Certificate of Completion"}
        />
      </div>
    </div>
  );
};

export default ExpSection;

const ExpTile = ({
  isStart,
  isEnd,
  title,
  tenure,
  description,
  logo,
  certificateDescription,
}) => {
  return (
    <div className={styles.tile_body}>
      <div className={styles.content}>
        <div className={styles.job_title}>{title}</div>
        <div className={styles.tenure}>{tenure}</div>
        <div className={styles.description}>
          {description}
          {certificateDescription && (
            <div className={styles.certificate}>
              <img src={linkIcon} className={styles.link_icon} />
              <span className={styles.certif_title}>
                {certificateDescription}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.graph}>
        {!isStart && <div className={styles.top_conn} />}
        <div className={styles.lmrk}>
          <img src={logo} />
        </div>
        {!isEnd && <div className={styles.btm_conn} />}
      </div>
    </div>
  );
};
