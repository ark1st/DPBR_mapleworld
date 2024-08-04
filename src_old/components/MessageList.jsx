import PropTypes from "prop-types";

const MessageList = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full shrink-0 text-left text-sm text-text-text800 font-dpbr-typography-f12-md ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-3 shrink-0 max-w-full">
        <div className="self-stretch shadow-[1px_1px_4px_rgba(0,_0,_0,_0.08)] rounded-xl bg-background-background00 overflow-hidden flex flex-row flex-wrap items-center justify-start [row-gap:20px]">
          <div className="h-[90px] w-[156px] relative bg-text-text00" />
          <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-3 pb-3 box-border gap-3 min-w-[122px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
              <div className="self-stretch h-5 relative leading-[140%] font-medium flex items-center whitespace-nowrap">
                미나의 메생을 보시겟나용ㅇ
              </div>
              <div className="w-[70px] flex flex-row items-center justify-start gap-[2.5px] text-xs text-text-text300">
                <div className="h-3.5 w-3.5 relative rounded-[50%] bg-text-text00" />
                <div className="h-[17px] flex-1 relative leading-[140%] font-medium flex items-center">
                  강민아
                </div>
                <img
                  className="h-[15px] w-3.5 relative"
                  alt=""
                  src="/dpbr-badge2.svg"
                />
              </div>
            </div>
            <div className="w-14 h-[17px] flex flex-row items-center justify-start gap-2 text-xs text-text-text300">
              <div className="self-stretch flex-1 rounded-81xl flex flex-row items-center justify-start gap-0.5">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-11.svg"
                />
                <div className="self-stretch flex-1 relative leading-[140%] flex items-center">
                  0
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-81xl flex flex-row items-center justify-start gap-0.5">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-21.svg"
                />
                <div className="self-stretch flex-1 relative leading-[140%] font-medium flex items-center">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[1px_1px_4px_rgba(0,_0,_0,_0.08)] rounded-xl bg-background-background00 overflow-hidden flex flex-row flex-wrap items-center justify-start [row-gap:20px]">
          <div className="h-[90px] w-[156px] relative bg-text-text00" />
          <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-3 pb-3 box-border gap-3 min-w-[122px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
              <div className="self-stretch h-5 relative leading-[140%] font-medium flex items-center">
                준향이의 메생결산
              </div>
              <div className="w-[70px] flex flex-row items-center justify-start gap-[2.5px] text-xs text-text-text300">
                <div className="h-3.5 w-3.5 relative rounded-[50%] bg-text-text00" />
                <div className="h-[17px] flex-1 relative leading-[140%] font-medium flex items-center">
                  정준형
                </div>
                <img
                  className="h-[15px] w-3.5 relative"
                  alt=""
                  src="/dpbr-badge2.svg"
                />
              </div>
            </div>
            <div className="w-14 h-[17px] flex flex-row items-center justify-start gap-2 text-xs text-text-text300">
              <div className="self-stretch flex-1 rounded-81xl flex flex-row items-center justify-start gap-0.5">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-11.svg"
                />
                <div className="self-stretch flex-1 relative leading-[140%] flex items-center">
                  0
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-81xl flex flex-row items-center justify-start gap-0.5">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-21.svg"
                />
                <div className="self-stretch flex-1 relative leading-[140%] font-medium flex items-center">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="self-stretch shadow-[1px_1px_4px_rgba(0,_0,_0,_0.08)] rounded-xl bg-background-background00 overflow-hidden flex flex-row items-center justify-start [row-gap:20px] text-left text-sm text-text-text800 font-dpbr-typography-f12-md">
          <div className="h-[110px] w-[156px] relative bg-text-text00 min-w-[156px]" />
          <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-3 pb-3 box-border gap-3 min-w-[122px]">
            <div className="self-stretch h-[59px] flex flex-col items-start justify-start gap-0.5">
              <div className="self-stretch flex-1 relative leading-[140%] font-medium flex items-center">
                타루카루타루카루타루카루타
              </div>
              <div className="w-[59px] flex flex-row items-center justify-start gap-[3px] text-xs text-text-text300">
                <div className="h-3.5 w-3.5 relative rounded-[50%] bg-text-text00" />
                <div className="h-[17px] flex-1 relative leading-[140%] font-medium flex items-center">
                  김윤
                </div>
                <img
                  className="h-[15px] w-3.5 relative"
                  alt=""
                  src="/dpbr-badge2.svg"
                />
              </div>
            </div>
            <div className="w-14 h-[17px] flex flex-row items-center justify-start gap-2 text-xs text-text-text300">
              <div className="self-stretch flex-1 rounded-81xl flex flex-row items-center justify-start gap-0.5">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-11.svg"
                />
                <div className="self-stretch flex-1 relative leading-[140%] flex items-center">
                  0
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-81xl flex flex-row items-center justify-start gap-0.5">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-21.svg"
                />
                <div className="self-stretch flex-1 relative leading-[140%] font-medium flex items-center">
                  0
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

MessageList.propTypes = {
  className: PropTypes.string,
};

export default MessageList;
