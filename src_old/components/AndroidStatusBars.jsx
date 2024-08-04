import { useMemo } from "react";
import PropTypes from "prop-types";

const AndroidStatusBars = ({
  className = "",
  frameDivAlignSelf,
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
  frameDivWidth,
}) => {
  const androidStatusBarsStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
      width: frameDivWidth,
    };
  }, [
    frameDivAlignSelf,
    frameDivPosition,
    frameDivTop,
    frameDivLeft,
    frameDivWidth,
  ]);

  return (
    <header
      className={`self-stretch bg-background-background00 flex flex-row items-end justify-between pt-[6.6px] px-4 pb-[6.7px] gap-5 ${className}`}
      style={androidStatusBarsStyle}
    >
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.8px]">
        <img className="w-[30.5px] h-[9px] relative" alt="" src="/1230.svg" />
      </div>
      <div className="flex flex-row items-start justify-start gap-[3.1px]">
        <img
          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/wifi.svg"
        />
        <img
          className="h-[18px] w-[18px] relative"
          loading="lazy"
          alt=""
          src="/frame-2109.svg"
        />
        <img
          className="h-[18.7px] w-[18.7px] relative overflow-hidden shrink-0 min-h-[19px]"
          loading="lazy"
          alt=""
          src="/battery.svg"
        />
      </div>
    </header>
  );
};

AndroidStatusBars.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivAlignSelf: PropTypes.any,
  frameDivPosition: PropTypes.any,
  frameDivTop: PropTypes.any,
  frameDivLeft: PropTypes.any,
  frameDivWidth: PropTypes.any,
};

export default AndroidStatusBars;
