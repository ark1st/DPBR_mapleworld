import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TabBarBtn from "./TabBarBtn";
import PropTypes from "prop-types";

const TabBar = ({
  className = "",
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propOverflowX,
  propFlex,
  tab,
  tab1,
  tab2,
}) => {
  const tabBarStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      overflowX: propOverflowX,
      flex: propFlex,
    };
  }, [
    propAlignSelf,
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propOverflowX,
    propFlex,
  ]);

  const navigate = useNavigate();

  const onTabBarBtnContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTabBarBtnContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTabBarBtnContainerClick2 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`self-stretch rounded-xl bg-background-background20 overflow-x-auto flex flex-row items-start justify-start p-1.5 gap-1 text-left text-base text-text-text500 font-dpbr-typography-f12-md ${className}`}
      style={tabBarStyle}
    >
      <TabBarBtn
        onTabBarBtnContainerClick1={onTabBarBtnContainerClick}
        propBackgroundColor="#fff"
        propFlex="1" // 모든 버튼에 flex 값을 1로 설정
        tab={tab}
        propColor="#ff6d6a"
        propMinWidth="33px"
      />
      <TabBarBtn
        onTabBarBtnContainerClick1={onTabBarBtnContainerClick1}
        propBackgroundColor="#f7f9fa"
        propFlex="1" // propFlex을 1로 설정하여 반응형으로 만듦
        tab={tab1}
        propColor="#6c7680"
        propMinWidth="84px"
      />
      <TabBarBtn
        onTabBarBtnContainerClick1={onTabBarBtnContainerClick2}
        tab={tab2}
        propFlex="1" // 이 요소도 flex 값을 1로 설정
      />
    </div>

  );
};

TabBar.propTypes = {
  className: PropTypes.string,
  tab: PropTypes.string,
  tab1: PropTypes.string,
  tab2: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propOverflowX: PropTypes.any,
  propFlex: PropTypes.any,
};

export default TabBar;
