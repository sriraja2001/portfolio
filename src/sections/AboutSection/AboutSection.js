import styles from "./AboutSection.module.css";
import profile from "../../res/profile.jpeg";
import profileMem from "../../res/profile_mem.jpeg";
import instagramIcon from "../../res/instagram_icon.png";
import gmailIcon from "../../res/gmail_icon.png";
import linkedinIcon from "../../res/linkedin_icon.png";
import xIcon from "../../res/x_icon.png";
import resumeIcon from "../../res/resume.png";
import messageIcon from "../../res/message.png";
import GradientText from "../../components/GradientText/GradientText";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const targetRef = useRef(null);
  const [isOutOfView, setIsOutOfView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOutOfView(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className={styles.name_bar} style={{ opacity: isOutOfView ? 1 : 0 }}>
        <img src={profileMem} />
        <div className={styles.name}>Sri Raja Vignesh</div>
      </div>
      <div className={styles.body}>
        <div className={styles.header} ref={targetRef}>
          <img src={profile} />
          <div className={styles.text}>
            <div className={styles.name}>Sri Raja Vignesh</div>
            <div className={styles.title}>Computer Engineer</div>
            <div className={styles.connect}>
              <div className={styles.resume}>
                <img src={resumeIcon} className={styles.connect_icon} />
                <span>Download CV</span>
              </div>
              <div className={styles.message}>
                <img src={messageIcon} className={styles.connect_icon} />
                <span>Send a message</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            In college, a simple programming class ignited my passion for
            coding. The endless possibilities in the world of technology
            fascinated me, and I quickly dove deeper into the field. Today, as a
            computer engineer with a deep interest in{" "}
            <GradientText>AI & ML</GradientText>, supported by solid experiences
            exploring the field, working with{" "}
            <GradientText>Microsoft</GradientText>,{" "}
            <GradientText>Samsung</GradientText> and the professors at the{" "}
            <GradientText>National University of Singapore</GradientText>, I’m
            constantly experimenting with technologies can transform application
            development and bring innovative solutions to life.<br></br>
          </p>
          <div className={styles.socials}>
            <img src={instagramIcon} />
            <img src={linkedinIcon} />
            <img src={gmailIcon} style={{ height: "87%" }} />
            <img src={xIcon} style={{ height: "87%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
