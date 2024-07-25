import PropTypes from "prop-types";
import FlexButton from "./FlexButton";

const NavigationBar = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-white flex flex-row items-start justify-start pt-2.5 pb-[7px] pr-3 pl-5 gap-[6px] text-center text-sm text-gray-400 font-poppins border-b-[1px] border-solid border-whitesmoke-200 ${className}`}
    >
      <FlexButton className="min-w-[27px]" active>
        전체
      </FlexButton>
      <FlexButton className="min-w-[99px]">
        메월드 Partners
      </FlexButton>
      <FlexButton className="min-w-[73px]">
        메월드 Next
      </FlexButton>
      <FlexButton className="min-w-[73px]">
        메월드 Next
      </FlexButton>
      <FlexButton className="min-w-[27px]">
        메월드
      </FlexButton>
    </div>
  );
};

NavigationBar.propTypes = {
  className: PropTypes.string,
};

export default NavigationBar;
