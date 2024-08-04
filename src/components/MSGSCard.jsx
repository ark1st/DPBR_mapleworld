import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const MSGSCard = ({
  className = "",
  prop,
  prop1,
  image,
  dPBRBadge,
  onMSGSCardContainerClick,
}) => {
  const navigate = useNavigate();

  const onMSGSCardContainerClick1 = useCallback(() => {
    navigate("/contents");
  }, [navigate]);

  return (
<div
  className={`self-stretch shadow-[1px_1px_4px_rgba(0,_0,_0,_0.08)] rounded-xl bg-background-background00 overflow-hidden flex flex-row items-start justify-start gap-y-5 cursor-pointer text-left text-sm text-text-text800 font-dpbr-typography-f12-md flex-wrap ${className}`}
  // Handle click events with the provided handlers
  onClick={onMSGSCardContainerClick || onMSGSCardContainerClick1}
>
  {/* Image container with fixed dimensions */}
  <div className="h-[90px] w-[156px] relative bg-text-text00 min-w-[156px] flex items-center justify-center">
    {/* Image element inside the container */}
    <img
      className="object-cover h-full"
      src={image} // Replace with the actual image path
    />
  </div>
  
  {/* Content container with flexible layout */}
  <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-3 pb-3 box-border gap-3 min-w-[122px]">
    <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
      {/* Text that will be truncated with ellipsis if it overflows */}
      <div className="self-stretch relative leading-[140%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
        {prop}
      </div>
      
      {/* Container for additional text and icon */}
      <div className="flex flex-row items-start justify-start gap-[3px] text-xs text-text-text300">
        <div className="h-3.5 flex flex-col items-start justify-start pt-[1.5px]">
          {/* Circular background indicator */}
          <div className="w-3.5 h-3.5 relative rounded-[50%] bg-text-text00" />
        </div>
        {/* Dynamic text with minimum width */}
        <div className="relative leading-[140%] font-medium inline-block min-w-[37px]">
          {prop1}
        </div>
        <div className="h-[15px] flex flex-col items-start justify-start pt-px">
          {/* Image with lazy loading for performance */}
          <img
            className="w-3.5 h-[15px] relative"
            loading="lazy"
            alt="Badge"
            src={dPBRBadge}
          />
        </div>
      </div>
    </div>

    {/* Section for icons with counts */}
    <div className="flex flex-row items-start justify-start gap-2 text-xs text-text-text300">
      {/* Icon with count */}
      <div className="rounded-81xl flex flex-row items-start justify-start gap-0.5">
        <div className="h-3.5 flex flex-col items-start justify-start pt-[1.5px]">
          <img
            className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt="Icon 1"
            src="/icon-11.svg"
          />
        </div>
        <div className="relative leading-[17px] inline-block min-w-[8px]">0</div>
      </div>
      {/* Another icon with count */}
      <div className="rounded-81xl flex flex-row items-start justify-start gap-0.5">
        <div className="h-3.5 flex flex-col items-start justify-start pt-[1.5px]">
          <img
            className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt="Icon 2"
            src="/icon-21.svg"
          />
        </div>
        <div className="relative leading-[17px] font-medium inline-block min-w-[8px]">
          0
        </div>
      </div>
    </div>
  </div>
</div>



  );
};

MSGSCard.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  dPBRBadge: PropTypes.string,

  /** Action props */
  onMSGSCardContainerClick: PropTypes.func,
};

export default MSGSCard;
