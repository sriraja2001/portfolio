import styles from "./SideNavBar.module.css";

const SideNavBar = ({ tabs, selectedTab, setSelectedTab }) => {
  const selectedTabStyle = {
    color: "black",
    fontSize: "25px",
    fontWeight: 600,
  };

  return (
    <div className={styles.nav_body}>
      {tabs.map((tab, index) => {
        return (
          <div
            className={styles.nav_element}
            style={selectedTab === index ? selectedTabStyle : null}
            onClick={() => setSelectedTab(index)}
            key={index}
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
};

export default SideNavBar;
