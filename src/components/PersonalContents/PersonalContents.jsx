import { useMemo } from "react";
import PropTypes from "prop-types";

const PersonalContents = ({
  className = "",
  rectangle1,
  prop,
  prop1,
  propWidth,
  propDisplay,
  propMinWidth,
}) => {
  const div1Style = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propWidth, propDisplay, propMinWidth]);

  return (
    <div
      className={`self-stretch rounded-xl bg-background-background00 overflow-hidden flex flex-col items-start justify-start text-left text-xs text-text-text500 font-dpbr-typography-f12-md ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={rectangle1}
      />
      <div className="self-stretch bg-background-background20 flex flex-col items-start justify-start p-3 gap-3">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0 pr-5">
          <div className="relative leading-[17px] font-medium inline-block min-w-[73px]">
            {prop}
          </div>
          <div
            className="w-[203px] relative text-sm leading-[140%] font-medium text-text-text800 flex items-center"
            style={div1Style}
          >
            {prop1}
          </div>
        </div>
        <div className="relative leading-[140%] font-medium inline-block min-w-[61px] whitespace-nowrap">
          #담뫄 #졸업
        </div>
      </div>
    </div>
  );
};

PersonalContents.propTypes = {
  className: PropTypes.string,
  rectangle1: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default PersonalContents;
