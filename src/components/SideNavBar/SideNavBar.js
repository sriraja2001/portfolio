import styles from "./SideNavBar.module.css";

const SideNavBar = ({ tabs, selectedTab, setSelectedTab }) => {
  const selectedTabStyle = {
    color: "grey",
    fontSize: "25px",
    fontWeight: 600,
  };

  const scrollToElement = (id) => {
    if (id == "About") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.querySelector(`#${id}`);
      const offset = 120; // Adjust this value to the desired offset
      const elementPosition = element.getBoundingClientRect().top;

      const positionToScroll = elementPosition + window.pageYOffset - offset;

      if (element) {
        // element.scrollIntoView({
        //   behavior: "smooth",
        //   block: "start",
        // });
        window.scrollTo({
          top: positionToScroll,
          behavior: "smooth", // Smooth scrolling
        });
      }
    }
  };

  return (
    <div className={styles.nav_body}>
      {tabs.map((tab, index) => {
        return (
          <div
            className={styles.nav_element}
            style={selectedTab === index ? selectedTabStyle : null}
            onClick={() => {
              setSelectedTab(index);
              scrollToElement(tab.trim().split(/\s+/)[0]);
            }}
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
