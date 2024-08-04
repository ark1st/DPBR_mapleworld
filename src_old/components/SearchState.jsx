import PropTypes from "prop-types";

const SearchState = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-81xl bg-background-background20 flex flex-row items-center justify-between py-2 pl-3 pr-2 whitespace-nowrap gap-5 text-left text-base text-text-text300 font-dpbr-typography-f12-md ${className}`}
    >
      <div className="w-[140px] relative leading-[140%] inline-block whitespace-nowrap">
        검색어를 입력하세요.
      </div>
      <img
        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
        alt=""
        src="/icon-1.svg"
      />
    </div>
  );
};

SearchState.propTypes = {
  className: PropTypes.string,
};

export default SearchState;
