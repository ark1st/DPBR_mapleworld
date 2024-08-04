import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SideBarTop = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSideBarTopIconsClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onSideBarTopIconsClick1 = useCallback(() => {
    navigate("/dpbr-profile");
  }, [navigate]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-4 text-left text-xl text-text-text800 font-dpbr-typography-f12-md ${className}`}
    >
      <div
        className="flex flex-row items-center justify-start gap-4 cursor-pointer"
        onClick={onSideBarTopIconsClick}
      >
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icon-8.svg"
        />
        <h3 className="m-0 relative text-inherit leading-[140%] font-normal font-[inherit] inline-block min-w-[74px] whitespace-nowrap">
          메생결산
        </h3>
      </div>
      <div
        className="flex flex-row items-center justify-start gap-4 cursor-pointer"
        onClick={onSideBarTopIconsClick1}
      >
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icon-9.svg"
        />
        <h3 className="m-0 relative text-inherit leading-[140%] font-normal font-[inherit] inline-block min-w-[74px] whitespace-nowrap">
          단풍바람
        </h3>
      </div>
    </div>
  );
};

SideBarTop.propTypes = {
  className: PropTypes.string,
};

export default SideBarTop;
