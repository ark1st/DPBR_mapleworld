import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AppBar = ({ className = "", onFrameContainerClick }) => {
  const navigate = useNavigate();

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/dpbr-profile");
  }, [navigate]);

  return (
    <div
      className={`self-stretch shadow-[0px_2px_4px_rgba(0,_0,_0,_0.04)] bg-background-background00 flex flex-row items-center justify-between py-2 px-3 gap-5 ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-2">
        <div
          className="flex flex-row items-start justify-start p-2 cursor-pointer"
          onClick={onFrameContainerClick}
        >
          <div className={`h-6 w-6 relative overflow-hidden shrink-0`}>
            <div className="absolute h-[6.25%] w-[72.92%] top-[22.08%] right-[13.33%] bottom-[71.67%] left-[13.75%] border-text-text800 border-t-[1.5px] border-solid box-border" />
            <div className="absolute h-[6.25%] w-[72.92%] top-[51.25%] right-[13.33%] bottom-[42.5%] left-[13.75%] border-text-text800 border-t-[1.5px] border-solid box-border" />
            <div className="absolute h-[6.25%] w-[72.92%] top-[80.42%] right-[13.33%] bottom-[13.33%] left-[13.75%] border-text-text800 border-t-[1.5px] border-solid box-border" />
          </div>
          
          {/* <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon.svg"
          /> */}
        </div>
        <img
          className="h-7 w-[62px] relative cursor-pointer"
          loading="lazy"
          alt=""
          src="/frame-2854.svg"
          onClick={onFrameContainerClick1}
        />
      </div>
      <div className="flex flex-row items-center justify-end gap-2">
        <div className="flex flex-row items-start justify-start p-2">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon-1.svg"
          />
        </div>
        <div
          className="flex flex-row items-center justify-center p-1 cursor-pointer"
          onClick={onFrameContainerClick2}
        >
          <div className="h-8 w-8 relative rounded-81xl border-background-background40 border-[1px] border-solid box-border">
            <img
              className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_11px)] w-[21.7px] h-6 object-cover"
              loading="lazy"
              alt=""
              src="/image-89@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

AppBar.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onFrameContainerClick: PropTypes.func,
};

export default AppBar;
