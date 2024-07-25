import PropTypes from "prop-types";
import styles from "./WorldListItems1.module.css";

const WorldListItems1 = ({
  className = "",
  linkEBA994EC9DB4ED948C,
  prop,
  backgroundBorder,
  prop1,
  image,
  placeholder,
  k,
  k1,
}) => {
  return (
    <div className={[styles.worldListItems, className].join(" ")}>
      <div className={styles.backgroundbordershadow}>
        <img
          className={styles.linkEba994ec9db4ed9}
          loading="lazy"
          alt=""
          src={linkEBA994EC9DB4ED948C}
        />
        <div className={styles.backgroundbordershadowInner}>
          <div className={styles.linkParent}>
            <div className={styles.link}>
              <div className={styles.div}>{prop}</div>
            </div>
            <div className={styles.iconParent}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon-2.svg"
              />
              <div className={styles.worldListItemInfoItemsParent}>
                <div className={styles.worldListItemInfoItems}>
                  <img
                    className={styles.backgroundborderIcon}
                    loading="lazy"
                    alt=""
                    src={backgroundBorder}
                  />
                  <div className={styles.worldListItemInfoItemsInner}>
                    <div className={styles.containerParent}>
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
                  </div>
                </div>
                <div className={styles.placeholderParent}>
                  <div className={styles.placeholder}>{placeholder}</div>
                  <div className={styles.kWrapper}>
                    <div className={styles.k}>{k}</div>
                  </div>
                  <img
                    className={styles.icon1}
                    loading="lazy"
                    alt=""
                    src="/icon-3.svg"
                  />
                  <div className={styles.k1}>{k1}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WorldListItems1.propTypes = {
  className: PropTypes.string,
  linkEBA994EC9DB4ED948C: PropTypes.string,
  prop: PropTypes.string,
  backgroundBorder: PropTypes.string,
  prop1: PropTypes.string,
  image: PropTypes.string,
  placeholder: PropTypes.string,
  k: PropTypes.string,
  k1: PropTypes.string,
};

export default WorldListItems1;
