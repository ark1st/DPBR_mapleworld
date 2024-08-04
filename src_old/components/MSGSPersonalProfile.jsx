import MSGSPersonalBtn from "./MSGSPersonalBtn";
import PropTypes from "prop-types";

const MSGSPersonalProfile = ({ className = "" }) => {
  return (
    <div
  className={`self-stretch flex flex-row items-center justify-between gap-5 text-left text-xs text-text-text500 font-dpbr-typography-f12-md ${className}`}
>
  <div className="flex flex-row items-center justify-start gap-4">
    <div className="h-16 w-16 rounded-3xl bg-background-background40 flex flex-row items-center justify-start p-0 box-border relative gap-2.5">
      <img
        className="h-full w-full absolute top-0 left-1/2 transform -translate-x-1/2 rounded-2xl object-cover"
        alt=""
        src="/avatar-background@2x.png"
      />
      <img
        className="h-[21px] w-5 absolute top-[-4px] right-[-4px] z-10"
        loading="lazy"
        alt=""
        src="/dpbr-badge.svg"
      />
    </div>
    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-px gap-1">
      <div className="flex flex-row items-end justify-start gap-px">
        <div className="w-4 flex flex-row items-center justify-center py-px px-0 box-border">
          <img
            className="h-4 w-4 relative object-cover"
            loading="lazy"
            alt=""
            src="/@2x.png"
          />
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[140%] inline-block min-w-[2.8125rem]">
            이노시스
          </div>
          <div className="relative leading-4 inline-block min-w-[0.3125rem]">
            /
          </div>
          <div className="relative leading-[140%] inline-block min-w-[1.4375rem]">
            아크
          </div>
        </div>
      </div>
      <b className="relative text-base leading-[140%] inline-block text-text-text800 min-w-[3.0625rem]">
        강민아
      </b>
    </div>
  </div>
  <div className="flex flex-col items-end justify-start gap-1 text-text-text300">
    <div className="w-7 h-7 rounded-full bg-background-background00 border-background-background40 border box-border flex flex-row items-center justify-start p-1.5">
      <img
        className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
        alt=""
        src="/icon-2.svg"
      />
    </div>
    <div className="flex flex-row items-center justify-start gap-1">
      <div className="rounded-full bg-background-background40 flex flex-row items-center justify-start py-1.5 px-2 gap-0.5 text-left text-xs text-text-text300 font-dpbr-typography-f12-md">
        <img
          className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
          alt=""
          src="/icon-3.svg"
        />
        <div
          className="relative leading-4 font-medium inline-block min-w-[0.5rem]"
          style={{ fontWeight: 'unset' }}
        >
          0
        </div>
      </div>

      <div className="rounded-full bg-background-background40 flex flex-row items-center justify-start py-1.5 px-2 gap-0.5 text-left text-xs text-text-text300 font-dpbr-typography-f12-md">
        <img
          className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
          alt=""
          src="/icon-4.svg"
        />
        <div
          className="relative leading-4 font-medium inline-block min-w-[0.5rem]"
          style={{ fontWeight: undefined }}
        >
          0
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

MSGSPersonalProfile.propTypes = {
  className: PropTypes.string,
};

export default MSGSPersonalProfile;
