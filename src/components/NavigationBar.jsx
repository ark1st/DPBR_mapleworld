import PropTypes from "prop-types";
import FlexButton from "./FlexButton";

const NavigationBar = ({ className = "" }) => {
  return (
    <div
       className={`self-stretch bg-white flex flex-row items-start justify-start py-2.5 px-5 gap-1.5 text-center text-sm text-gray-400 font-poppins border-b border-whitesmoke-200 overflow-x-auto ${className}`}
    >
      <FlexButton className="inline-block">
        전체
      </FlexButton>
      <FlexButton className="inline-block">
        메월드 Partners
      </FlexButton>
      <FlexButton className="inline-block">
        메월드 Next
      </FlexButton>
      <FlexButton className="inline-block">
        메월드 Next
      </FlexButton>
      <FlexButton className="inline-block">
        메월드
      </FlexButton>
    </div>
  );
};

NavigationBar.propTypes = {
  className: PropTypes.string,
};

export default NavigationBar;
