import styles from "./ProjectSection.module.css";
import linkIcon from "../../res/link_icon.png";
import projectOne from "../../res/project-1.png";
import projectTwo from "../../res/project-2.png";

const ProjectSection = () => {
  return (
    <div className={styles.body} id="section-Projects">
      <div className={styles.title} id="Projects">
        Projects
      </div>
      <div className={styles.proj_list}>
        <ProjectTile
          isEnd
          title={"Apparel Recommendation System"}
          subtitle={"PSG College of Technology"}
          description={
            "➥ Developed an e-commerce portal featuring a comprehensive apparel recommendation system that analyzes user purchase history to suggest similar items.\n\n➥ Enhanced model performance by incorporating reinforcement learning strategies inspired by the Pensive ABR Algorithm, allowing for greater adaptability to varying network conditions.\n\n➥ Implemented the K-Nearest Neighbors algorithm to accurately identify and recommend similar clothing options, enhancing the user shopping experience."
          }
          skills={[
            "OpenCV",
            "ResNet-50",
            "K-Means Clustering",
            "React.Js",
            "Flask",
          ]}
          certificateDescription={"IEEE Research Paper"}
          certificateLink={
            "https://drive.google.com/file/d/1T9yU6cIjprgHA4B1Mu4_lIgFU9MaOfX7/view?usp=sharing"
          }
          thumbnail={projectOne}
        />
        <ProjectTile
          isEnd
          title={"Knowledge Graph-Based Chatbot"}
          subtitle={"PSG College of Technology"}
          description={
            "➥ Designed and implemented a dynamic knowledge graph data structure that organizes information as entities (nodes) and relationships (edges), enabling efficient data management.\n\n➥ Utilized advanced relationship extraction algorithms to automatically update the graph with real-time data sourced from text-format news articles, ensuring the chatbot has access to the latest information.\n\n➥ Developed an intelligent chatbot capable of retrieving relevant information through optimized traversal methods."
          }
          skills={[
            "Natural Language Processing",
            "Graph Algorithms",
            "React.Js",
            "Flask",
          ]}
          certificateDescription={"IEEE Research Paper"}
          certificateLink={
            "https://drive.google.com/file/d/1e90sOWrPw52CxoVBFjNsLWeKaDkm_n_v/view?usp=sharing"
          }
          thumbnail={projectTwo}
        />
      </div>
    </div>
  );
};

const ProjectTile = ({
  title,
  subtitle,
  description,
  thumbnail,
  skills,
  certificateDescription,
  certificateLink,
}) => {
  return (
    <div className={styles.tile_body}>
      <div className={styles.content}>
        <div className={styles.job_title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.description}>
          {description}
          {certificateDescription && (
            <div
              className={styles.certificate}
              onClick={() => {
                window.open(certificateLink, "_blank");
              }}
            >
              <img
                src={linkIcon}
                className={styles.link_icon}
                onClick={() => {
                  window.open(certificateLink, "_blank");
                }}
              />
              <span className={styles.certif_title}>
                {certificateDescription}
              </span>
            </div>
          )}
          {skills && (
            <div className={styles.skill_list}>
              {skills.map((skill) => (
                <div className={styles.pill_body}>{skill}</div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.document}>
        <div className={styles.img_container}>
          <div
            className={styles.link_button}
            onClick={() => {
              window.open(certificateLink, "_blank");
            }}
          >
            <img src={linkIcon} className={styles.link_image} />
          </div>
          <img src={thumbnail} className={styles.thumbnail_icon} />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
