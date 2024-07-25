import PropTypes from "prop-types";
import styles from "./WorldListItems.module.css";

const WorldListItems = ({
  className = "",
  linkEBA994EB9E9CEB9494,
  prop,
  container,
  prop1,
  image,
  placeholders,
  k,
  icon1,
  k1,
}) => {
  return (
    <div className={[styles.worldListItems, className].join(" ")}>
      <div className={styles.backgroundbordershadow}>
        <img
          className={styles.linkEba994eb9e9ceb9}
          loading="lazy"
          alt=""
          src={linkEBA994EB9E9CEB9494}
        />
        <div className={styles.backgroundbordershadowInner}>
          <div className={styles.linkParent}>
            <div className={styles.link}>
              <div className={styles.div}>{prop}</div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.containerParent}>
                <img
                  className={styles.containerIcon}
                  loading="lazy"
                  alt=""
                  src={container}
                />
                <div className={styles.container}>
                  <div className={styles.div1}>{prop1}</div>
                </div>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.imageIcon}
                    loading="lazy"
                    alt=""
                    src={image}
                  />
                </div>
              </div>
              <div className={styles.iconParent}>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/icon-2.svg"
                />
                <div className={styles.placeholders}>{placeholders}</div>
                <div className={styles.kWrapper}>
                  <div className={styles.k}>{k}</div>
                </div>
                <img
                  className={styles.icon1}
                  loading="lazy"
                  alt=""
                  src={icon1}
                />
                <div className={styles.k1}>{k1}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WorldListItems.propTypes = {
  className: PropTypes.string,
  linkEBA994EB9E9CEB9494: PropTypes.string,
  prop: PropTypes.string,
  container: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,
  placeholders: PropTypes.string,
  k: PropTypes.string,
  icon1: PropTypes.string,
  k1: PropTypes.string,
};

export default WorldListItems;
