import PropTypes from "prop-types";

const MSGSPersonalIntroduce = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-2xl bg-background-background20 flex flex-row items-center justify-center py-3 px-[15px] text-left text-xs text-text-text800 font-dpbr-typography-f12-md ${className}`}
    >
      <div className="h-[51px] flex-1 relative leading-[140%] flex items-center">
        안녕하세요 이노시스에서 아크를 키우고 있는 강민아입니다. 메생결산이 그리
        많지는 않지만 기억할 만한 것들을 모아봤으니 재밌게 봐 주세요! 그리고
        담뫄는 너무 기여워요
      </div>
    </div>
  );
};

MSGSPersonalIntroduce.propTypes = {
  className: PropTypes.string,
};

export default MSGSPersonalIntroduce;
