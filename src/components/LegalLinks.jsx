import PropTypes from "prop-types";

const LegalLinks = () => {
  return (
    <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[8.4px]">
      <div className="relative tracking-[-0.3px] leading-[21.6px] inline-block min-w-[47px]">
        이용약관
      </div>
      <div className="flex flex-col items-start justify-start pt-[6.3px] px-0 pb-0">
        <div className="w-px h-2.5 relative bg-gainsboro" />
      </div>
      <div className="flex-1 flex flex-row items-start justify-start gap-[9.4px] min-w-[162px]">
        <div className="flex flex-col items-end justify-start">
          <div className="flex flex-row items-start justify-end py-0 pr-px pl-0">
            <div className="flex flex-row items-end justify-start gap-[10.1px]">
              <b className="relative tracking-[-0.3px] leading-[21.6px] inline-block min-w-[86.3px] whitespace-nowrap">
                개인정보처리방침
              </b>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.3px]">
                <div className="w-px h-2.5 relative bg-gainsboro" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[10.5px]">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.3px]">
              <div className="w-px h-2.5 relative bg-gainsboro" />
            </div>
            <div className="relative tracking-[-0.3px] leading-[21.6px] inline-block min-w-[75.5px] whitespace-nowrap">
              청소년보호정책
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="relative tracking-[-0.3px] leading-[21.6px] shrink-0 whitespace-nowrap">
            콘텐츠 제작의 IP 사용 가이드
          </div>
          <div className="flex flex-row items-end justify-start gap-[6.8px] shrink-0">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.3px]">
              <div className="w-px h-2.5 relative bg-gainsboro" />
            </div>
            <div className="relative tracking-[-0.3px] leading-[21.6px] inline-block min-w-[47px]">
              운영정책
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalLinks;
