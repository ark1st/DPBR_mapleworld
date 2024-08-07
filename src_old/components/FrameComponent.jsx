import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AndroidStatusBars from "./AndroidStatusBars";
import AppBar from "../../src/components/Appbar/AppBar";
import TabBar from "../../src/components/TabBar";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-4 shrink-0 top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">

        <AppBar onFrameContainerClick={onFrameContainerClick} />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
        <TabBar
          propAlignSelf="unset"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propWidth="unset"
          propOverflowX="unset"
          propFlex="1"
          tab1="단풍바람 DP"
          tab2="단풍바람 BR"
        />
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
