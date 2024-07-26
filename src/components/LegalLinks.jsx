import PropTypes from "prop-types";

const LegalLinks = () => {
  return (
      <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-4">
        <div className="tracking-tight leading-6 inline-block min-w-min">
          이용약관
        </div>
        <div className="w-px h-6 bg-gainsboro"/>
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="tracking-tight leading-6 inline-block min-w-min whitespace-nowrap">
            <b>개인정보처리방침</b>
          </div>
          <div className="w-px h-6 bg-gainsboro"/>
          <div className="tracking-tight leading-6 inline-block min-w-min whitespace-nowrap">
            청소년보호정책
          </div>
        </div>
        <div className="w-px h-6 bg-gainsboro"/>
        <div className="tracking-tight leading-6 inline-block min-w-min whitespace-nowrap">
          콘텐츠 제작의 IP 사용 가이드
        </div>
        <div className="w-px h-6 bg-gainsboro"/>
        <div className="tracking-tight leading-6 inline-block min-w-min">
          운영정책
        </div>
      </div>


  );
};

export default LegalLinks;
