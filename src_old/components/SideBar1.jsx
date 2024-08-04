import { useMemo } from "react";
import SideBarTop from "./SideBarTop";
import PropTypes from "prop-types";

const SideBar1 = ({ className = "", propTop, propLeft, propMargin }) => {
  const sideBarStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      margin: propMargin,
    };
  }, [propTop, propLeft, propMargin]);

  return (
    <div
      className={`absolute top-[0px] left-[0px] bg-background-background00 w-[296px] h-[579px] flex flex-col items-start justify-between py-9 px-6 box-border z-[3] text-left text-xl text-text-text800 font-dpbr-typography-f12-md ${className}`}
      style={sideBarStyle}
    >
      <SideBarTop />
      <div className="self-stretch flex flex-col items-start justify-start gap-7 text-sm text-text-text700">
        <div className="self-stretch h-px relative border-background-background40 border-t-[1px] border-solid box-border" />
        <div className="flex flex-row items-end justify-start gap-2">
          <img
            className="h-6 w-[21.7px] relative object-cover"
            loading="lazy"
            alt=""
            src="/image-89@2x.png"
          />
          <div className="relative leading-[140%] font-medium whitespace-nowrap">
            2024년 2월 19일~8월 18일의 기록
          </div>
        </div>
      </div>
    </div>
  );
};

SideBar1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propMargin: PropTypes.any,
};

export default SideBar1;
