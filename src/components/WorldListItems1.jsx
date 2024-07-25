import PropTypes from "prop-types";
import "./WorldListItems1.css";

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
    <div className={`world-list-items2 ${className}`}>
      <div className="backgroundbordershadow3">
        <img
          className="link-eba994ec9db4ed9"
          loading="lazy"
          alt=""
          src={linkEBA994EC9DB4ED948C}
        />
        <div className="backgroundbordershadow-inner2">
          <div className="link-container">
            <div className="link3">
              <div className="div12">{prop}</div>
            </div>
            <div className="icon-parent1">
              <img className="icon9" loading="lazy" alt="" src="/icon-2.svg" />
              <div className="world-list-item-info-items-parent">
                <div className="world-list-item-info-items">
                  <img
                    className="backgroundborder-icon1"
                    loading="lazy"
                    alt=""
                    src={backgroundBorder}
                  />
                  <div className="world-list-item-info-items-inner">
                    <div className="container-parent1">
                      <div className="container4">
                        <div className="div13">{prop1}</div>
                      </div>
                      <div className="image-wrapper1">
                        <img
                          className="image-icon3"
                          loading="lazy"
                          alt=""
                          src={image}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="placeholder-group">
                  <div className="placeholder4">{placeholder}</div>
                  <div className="k-frame">
                    <div className="k4">{k}</div>
                  </div>
                  <img
                    className="icon10"
                    loading="lazy"
                    alt=""
                    src="/icon-3.svg"
                  />
                  <div className="k5">{k1}</div>
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