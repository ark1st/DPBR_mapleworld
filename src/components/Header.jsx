import { useMemo } from "react";
import PropTypes from "prop-types";

const Header = ({
  className = "",
  backgroundHorizontalBordeTop,
  backgroundHorizontalBordePosition,
}) => {
  const backgroundHorizontalBorderStyle = useMemo(() => {
    return {
      top: backgroundHorizontalBordeTop,
      position: backgroundHorizontalBordePosition,
    };
  }, [backgroundHorizontalBordeTop, backgroundHorizontalBordePosition]);

  return (
    <div
      className={`self-stretch bg-white flex flex-row items-start justify-between pt-2 px-5 pb-1.5 shrink-0 gap-[20px] text-center text-sm text-gray-300 font-poppins border-b-[1px] border-solid border-whitesmoke-200 ${className}`}
      style={backgroundHorizontalBorderStyle}
    >
      <div className="flex flex-row items-start justify-start gap-[16px]">
        <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
          <img
            className="w-8 h-8 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/button.svg"
          />
        </div>
        <img
          className="h-12 w-[108px] relative overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/link--heading-1--bi-maplestoryworlds96daecepng@2x.png"
        />
      </div>
      <div className="w-[106px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[13px]">
          <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <img
              className="w-[22px] h-[22px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="flex-1 rounded-xl flex flex-row items-start justify-start py-2.5 pr-2.5 pl-3.5 border-[2px] border-solid border-gray-300">
            <a className="[text-decoration:none] w-[43px] relative leading-[14px] font-bold text-[inherit] flex items-center justify-center shrink-0">
              로그인
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Style props */
  backgroundHorizontalBordeTop: PropTypes.any,
  backgroundHorizontalBordePosition: PropTypes.any,
};

export default Header;
