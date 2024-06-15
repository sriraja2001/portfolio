import styles from "./GradientText.module.css";

const GradientText = ({ children, style }) => {
  return (
    <span className={styles.gradient} style={style}>
      {children}
    </span>
  );
};

export default GradientText;
