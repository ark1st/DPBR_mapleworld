import { useMemo } from "react";
import PropTypes from "prop-types";

const MSGSPersonalBtn = ({ className = "", icon, propFontWeight }) => {
  const divStyle = useMemo(() => {
    return {
      fontWeight: propFontWeight,
    };
  }, [propFontWeight]);

  return (
    <div
      className={`rounded-81xl bg-background-background40 flex flex-row items-center justify-start py-[5.5px] px-2 gap-0.5 text-left text-xs text-text-text300 font-dpbr-typography-f12-md ${className}`}
    >
      <img
        className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
        alt=""
        src={icon}
      />
      <div
        className="relative leading-[17px] font-medium inline-block min-w-[8px]"
        style={divStyle}
      >
        0
      </div>
    </div>
  );
};

MSGSPersonalBtn.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,

  /** Style props */
  propFontWeight: PropTypes.any,
};

export default MSGSPersonalBtn;
