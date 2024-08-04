import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TabBarBtn = ({
  className = "",
  onTabBarBtnContainerClick1,
  propBackgroundColor,
  propFlex,
  tab,
  propColor,
  propMinWidth,
}) => {
  const tabBarBtnStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      flex: propFlex,
    };
  }, [propBackgroundColor, propFlex]);

  const tabStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  const navigate = useNavigate();

  return (
    <div
      className={`rounded-lg bg-background-background20 flex flex-row items-center justify-center py-2 px-3 whitespace-nowrap cursor-pointer text-left text-base text-text-text500 font-dpbr-typography-f12-md ${className}`}
      style={tabBarBtnStyle}
      onClick={onTabBarBtnContainerClick1} // Add the click handler if needed
    >
      <div
        className="relative leading-[140%] font-medium inline-block whitespace-nowrap text-center"
        style={tabStyle}
      >
        {tab}
      </div>
    </div>
  );
};

TabBarBtn.propTypes = {
  className: PropTypes.string,
  tab: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propFlex: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth: PropTypes.any,

  /** Action props */
  onTabBarBtnContainerClick1: PropTypes.func,
};

export default TabBarBtn;
