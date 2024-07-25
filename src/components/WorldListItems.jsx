import PropTypes from "prop-types";
import "./WorldListItems.css";

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
    <div className={`world-list-items3 ${className}`}>
      <div className="backgroundbordershadow4">
        <img
          className="link-eba994eb9e9ceb9"
          loading="lazy"
          alt=""
          src={linkEBA994EB9E9CEB9494}
        />
        <div className="backgroundbordershadow-inner3">
          <div className="link-parent1">
            <div className="link4">
              <div className="div14">{prop}</div>
            </div>
            <div className="frame-parent3">
              <div className="container-parent2">
                <img
                  className="container-icon2"
                  loading="lazy"
                  alt=""
                  src={container}
                />
                <div className="container5">
                  <div className="div15">{prop1}</div>
                </div>
                <div className="image-wrapper2">
                  <img
                    className="image-icon4"
                    loading="lazy"
                    alt=""
                    src={image}
                  />
                </div>
              </div>
              <div className="icon-parent2">
                <img
                  className="icon11"
                  loading="lazy"
                  alt=""
                  src="/icon-2.svg"
                />
                <div className="placeholders">{placeholders}</div>
                <div className="k-wrapper1">
                  <div className="k6">{k}</div>
                </div>
                <img className="icon12" loading="lazy" alt="" src={icon1} />
                <div className="k7">{k1}</div>
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