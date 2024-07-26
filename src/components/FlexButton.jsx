import PropTypes from "prop-types";

const FlexButton = ({ className = "", children, active = false }) => {
    const baseClasses = "h-8 rounded-xl flex items-center justify-start py-0.5 whitespace-nowrap px-3 border";
    const activeClasses = "bg-gray-400 border-gainsboro text-white";
    const inactiveClasses = "border-solid border-gainsboro text-gray-400";
  
  return (
    <div className={`${baseClasses} ${active ? activeClasses : inactiveClasses} ${className}`}>
      <a className="[text-decoration:none] relative tracking-tight leading-[31px] font-medium text-[inherit] inline-block">
        {children}
      </a>
    </div>
  );
};

FlexButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
};

export default FlexButton;
