import styles from "./ProjectSection.module.css";
import linkIcon from "../../res/link_icon.png";
import thumbnail from "../../res/thumbnail.png";
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
}) => {
  return (
    <div className={styles.tile_body}>
      <div className={styles.content}>
        <div className={styles.job_title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
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
        {/* <iframe src="https://drive.google.com/file/d/1hJAgczBj1Y6H00-qjB_5irje5yPO8ZYt/preview"></iframe> */}
        <div className={styles.img_container}>
          <div className={styles.link_button}>
            <img src={linkIcon} className={styles.link_image} />
          </div>
          <img src={thumbnail} className={styles.thumbnail_icon} />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
