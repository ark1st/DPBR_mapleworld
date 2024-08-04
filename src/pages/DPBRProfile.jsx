import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const DPBRProfile = () => {
  const navigate = useNavigate();

  const onNavigationContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/dpbr-profile");
  }, [navigate]);

  return (
    <div className="w-full relative bg-background-background00 overflow-hidden flex flex-col items-start justify-start gap-20 leading-[normal] tracking-[normal]">
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">

        <section className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-5xl text-text-text800 font-dpbr-typography-f12-md">
          <div className="flex-1 flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border max-w-full">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/dpbr-image-1@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[399px] max-w-full ml-[-375px]">
            <div className="self-stretch shadow-[0px_2px_4px_rgba(0,_0,_0,_0.04)] bg-background-background00 flex flex-row items-center justify-between py-2 px-3 gap-5 z-[1]">
              <div className="flex flex-row items-center justify-start gap-2">
                <div
                  className="flex flex-row items-start justify-start p-2 cursor-pointer"
                  onClick={onNavigationContainerClick}
                >
                      <div className={`h-6 w-6 relative overflow-hidden shrink-0`}>
                      <div className="absolute h-[6.25%] w-[72.92%] top-[22.08%] right-[13.33%] bottom-[71.67%] left-[13.75%] border-text-text800 border-t-[1.5px] border-solid box-border" />
                      <div className="absolute h-[6.25%] w-[72.92%] top-[51.25%] right-[13.33%] bottom-[42.5%] left-[13.75%] border-text-text800 border-t-[1.5px] border-solid box-border" />
                      <div className="absolute h-[6.25%] w-[72.92%] top-[80.42%] right-[13.33%] bottom-[13.33%] left-[13.75%] border-text-text800 border-t-[1.5px] border-solid box-border" />
                    </div>
                </div>
                <img
                  className="h-7 w-[62px] relative cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/frame-2854.svg"
                  onClick={onFrameClick}
                />
              </div>
              <div className="flex flex-row items-center justify-end gap-2">
                <div className="flex flex-row items-start justify-start p-2">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                <div
                  className="flex flex-row items-center justify-center p-1 cursor-pointer"
                  onClick={onFrameContainerClick}
                >
                  <div className="h-8 w-8 relative rounded-81xl border-background-background40 border-[1px] border-solid box-border">
                    <img
                      className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_11px)] w-[21.7px] h-6 object-cover"
                      loading="lazy"
                      alt=""
                      src="/image-89@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>




            
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[23.5px] max-w-full">
                <div className="w-[139px] flex flex-col items-start justify-start gap-1">
                  <h2 className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-[inherit]">
                    단풍바람
                  </h2>
                  <div className="relative text-base leading-[140%]">
                    #MAPLEWIND_GC
                  </div>
                </div>
                <div className="self-stretch h-px relative">
                  <div className="absolute top-[0px] left-[0px] border-background-background40 border-t-[1px] border-solid box-border w-full h-full" />
                  <div className="absolute top-[0px] left-[0px] border-background-background40 border-t-[1px] border-solid box-border w-full h-full" />
                </div>
                <div className="w-[277px] flex flex-row items-start justify-start gap-[27px] text-sm">
                  <div className="flex flex-col items-start justify-start gap-6">
                    <div className="flex flex-col items-start justify-start gap-[3px]">
                      <b className="relative leading-[140%] inline-block min-w-[85px] whitespace-nowrap">
                        단풍바람 10기
                      </b>
                      <b className="relative leading-[140%] inline-block min-w-[29px]">
                        장르
                      </b>
                      <b className="relative leading-[140%] inline-block min-w-[81px] whitespace-nowrap">
                        최대 플레이어
                      </b>
                      <b className="relative leading-[140%] inline-block min-w-[29px]">
                        언어
                      </b>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[3px]">
                      <b className="relative leading-[140%] inline-block min-w-[29px]">
                        회장
                      </b>
                      <b className="relative leading-[140%] inline-block min-w-[39px]">
                        부회장
                      </b>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[3px]">
                      <b className="relative leading-[140%] inline-block min-w-[29px]">
                        팩트
                      </b>
                      <b className="relative leading-[140%] inline-block min-w-[55px] whitespace-nowrap">
                        권장 연령
                      </b>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-6 text-text-text500">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
                      <div className="self-stretch relative leading-[140%] whitespace-nowrap">
                        2024년 3월 10일~8월 31일
                      </div>
                      <div className="relative leading-[140%] inline-block min-w-[29px]">
                        일상
                      </div>
                      <div className="relative leading-[20px] inline-block min-w-[38px]">
                        116명
                      </div>
                      <div className="w-[43px] relative leading-[140%] flex items-center">
                        한국어
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[3px]">
                      <div className="relative leading-[140%] inline-block min-w-[39px]">
                        정준형
                      </div>
                      <div className="relative leading-[140%] inline-block min-w-[29px]">
                        김윤
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[3px]">
                      <div className="relative leading-[140%] inline-block min-w-[94px] whitespace-nowrap">
                        건강해지고 있음
                      </div>
                      <div className="relative leading-[140%] inline-block min-w-[68px] whitespace-nowrap">
                        전체 이용가
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="self-stretch h-[120px] relative bg-background-background20 overflow-hidden shrink-0">
        <img
          className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_39.5px)] w-20 h-[21.9px] object-cover mix-blend-luminosity"
          loading="lazy"
          alt=""
          src="/image-92@2x.png"
        />
      </footer>
    </div>
  );
};

export default DPBRProfile;
