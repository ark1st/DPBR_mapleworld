import PropTypes from "prop-types";

const Icon = ({ className = "" }) => {
  return (
    <div className={`h-6 w-6 relative overflow-hidden shrink-0 ${className}`}>
      <div className="absolute h-[6.25%] w-[72.92%] top-[22.08%] right-[13.33%] bottom-[71.67%] left-[13.75%] border-text-text800 border-t-[1.5px] border-solid box-border" />
      <div className="absolute h-[6.25%] w-[72.92%] top-[51.25%] right-[13.33%] bottom-[42.5%] left-[13.75%] border-text-text800 border-t-[1.5px] border-solid box-border" />
      <div className="absolute h-[6.25%] w-[72.92%] top-[80.42%] right-[13.33%] bottom-[13.33%] left-[13.75%] border-text-text800 border-t-[1.5px] border-solid box-border" />
    </div>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
};

export default Icon;
