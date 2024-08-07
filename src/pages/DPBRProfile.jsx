import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import AppBar from "../components/Appbar/AppBar";
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
      <div
          className="w-full relative bg-background-background00 overflow-hidden grid grid-cols-1 auto-rows-auto gap-0 leading-normal tracking-normal">
        {/* 네비게이션 바: 상단 네비게이션 섹션 */}
        <AppBar/>


        <main className="flex flex-col items-start justify-start w-full gap-5">
          {/* 이미지 섹션 */}
          <div className="w-full ">
            <img
                className="w-full h-auto object-cover"
                loading="lazy"
                alt=""
                src="/dpbr-image-1@2x.png"
            />
          </div>

          {/* 콘텐츠 섹션 */}

          <section
              className="flex flex-col md:flex-row items-start justify-start w-full text-left text-5xl text-text-text800 font-dpbr-typography-f12-md">
            <div className="flex-1 flex flex-col items-start justify-start gap-6 w-full">
              {/* 정보 섹션: 단풍바람과 관련된 정보를 표시 */}
              <div className="flex flex-row items-start justify-start px-5 w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-4 w-full">
                  <div className="w-36 flex flex-col items-start justify-start gap-1">
                    <h2 className="m-0 w-full text-inherit leading-7 font-bold font-[inherit]">
                      단풍바람
                    </h2>
                    <div className="relative text-base leading-[140%]">
                      #MAPLEWIND_GC
                    </div>
                  </div>
                  <div className="w-full h-px relative">
                    <div className="absolute top-0 left-0 border-t border-background-background40 w-full"/>
                  </div>
                  <div className="w-72 flex flex-row items-start justify-start gap-4 text-sm">
                    <div className="flex flex-col items-start justify-start gap-4">
                      <div className="flex flex-col items-start justify-start gap-1">
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
                      <div className="flex flex-col items-start justify-start gap-1.5">
                        <b className="relative leading-[140%] inline-block min-w-[29px]">
                          회장
                        </b>
                        <b className="relative leading-[140%] inline-block min-w-[39px]">
                          부회장
                        </b>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-1">
                        <b className="relative leading-[140%] inline-block min-w-[29px]">
                          팩트
                        </b>
                        <b className="relative leading-[140%] inline-block min-w-[55px] whitespace-nowrap">
                          권장 연령
                        </b>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-4 text-text-text500">
                      <div className="self-stretch flex flex-col items-start justify-start gap-1">
                        <div className="self-stretch relative leading-[140%] whitespace-nowrap">
                          2024년 3월 10일~8월 31일
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
                      <div className="flex flex-col items-start justify-start gap-1.5">
                        <div className="relative leading-[140%] inline-block min-w-[39px]">
                          정준형
                        </div>
                        <div className="relative leading-[140%] inline-block min-w-[29px]">
                          김윤
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-1">
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

        <Footer/>
      </div>


  );
};

export default DPBRProfile;
