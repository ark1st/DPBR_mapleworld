import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AndroidStatusBars from "../components/AndroidStatusBars";
import AppBar from "../components/AppBar";
import SideBar1 from "../components/SideBar1";

const DPBRProfile1 = () => {
  const navigate = useNavigate();

  const onTopBarLeftInnerClick = useCallback(() => {
    navigate("/dpbr-profile");
  }, [navigate]);

  return (
    <div className="w-full h-[667px] relative bg-background-background00 overflow-hidden flex flex-col items-start justify-start gap-9 leading-[normal] tracking-[normal] text-left text-sm text-text-text800 font-dpbr-typography-f12-md">
      <img
        className="w-full h-[375px] absolute !m-[0] top-[88px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/dpbr-image-1@2x.png"
      />
      <b className="self-stretch relative text-5xl leading-[29px] hidden z-[1]">
        단풍바람
      </b>
      <div className="relative text-base leading-[140%] hidden z-[2]">
        #MAPLEWIND_GC
      </div>
      <div className="w-[336px] h-px relative border-background-background40 border-t-[1px] border-solid box-border hidden max-w-full z-[3]" />
      <div className="w-[336px] h-px relative border-background-background40 border-t-[1px] border-solid box-border hidden max-w-full z-[4]" />
      <b className="relative leading-[140%] hidden min-w-[85px] whitespace-nowrap z-[5]">
        단풍바람 10기
      </b>
      <b className="relative leading-[140%] hidden min-w-[29px] z-[6]">장르</b>
      <b className="relative leading-[140%] hidden min-w-[81px] whitespace-nowrap z-[7]">
        최대 플레이어
      </b>
      <b className="relative leading-[140%] hidden min-w-[29px] z-[8]">언어</b>
      <div className="relative leading-[140%] text-text-text500 hidden whitespace-nowrap z-[9]">
        2024년 3월 10일~8월 31일
      </div>
      <div className="relative leading-[140%] text-text-text500 hidden min-w-[29px] z-[10]">
        일상
      </div>
      <div className="relative leading-[20px] text-text-text500 hidden min-w-[38px] z-[11]">
        116명
      </div>
      <div className="relative leading-[140%] text-text-text500 hidden min-w-[43px] z-[12]">
        한국어
      </div>
      <main className="self-stretch flex flex-col items-start justify-start shrink-0">

        <AppBar onFrameContainerClick={onTopBarLeftInnerClick} />
        <section className="self-stretch h-[579px] relative">
          <footer className="absolute top-[459px] left-[0px] bg-background-background20 w-[375px] h-[120px] overflow-hidden z-[1]">
            <img
              className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_39.5px)] w-20 h-[21.9px] object-cover mix-blend-luminosity"
              loading="lazy"
              alt=""
              src="/image-92@2x.png"
            />
          </footer>
          <SideBar1 />
        </section>
      </main>
      <div className="w-full h-[1182px] absolute !m-[0] top-[-369px] right-[0px] left-[0px] bg-gray z-[2]" />
      <div className="w-[246px] flex flex-row items-start justify-start py-0 px-5 box-border">
        <div className="flex-1 flex flex-row items-start justify-between shrink-0 gap-5">
          <div className="w-[55px] flex flex-col items-start justify-start gap-[30px]">
            <div className="w-[39px] flex flex-col items-start justify-start gap-[3px]">
              <b className="w-[29px] h-5 relative leading-[140%] flex items-center">
                회장
              </b>
              <b className="self-stretch h-5 relative leading-[140%] flex items-center">
                부회장
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
              <b className="w-[29px] h-5 relative leading-[140%] flex items-center">
                팩트
              </b>
              <b className="self-stretch h-5 relative leading-[140%] flex items-center whitespace-nowrap">
                권장 연령
              </b>
            </div>
          </div>
          <div className="w-[94px] flex flex-col items-start justify-start gap-[30px] text-text-text500">
            <div className="w-[39px] flex flex-col items-start justify-start gap-[3px]">
              <div className="self-stretch h-5 relative leading-[140%] flex items-center">
                정준형
              </div>
              <div className="w-[29px] h-5 relative leading-[140%] flex items-center">
                김윤
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
              <div className="self-stretch h-5 relative leading-[140%] flex items-center whitespace-nowrap">
                건강해지고 있음
              </div>
              <div className="w-[68px] h-5 relative leading-[140%] flex items-center">
                전체 이용가
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DPBRProfile1;
