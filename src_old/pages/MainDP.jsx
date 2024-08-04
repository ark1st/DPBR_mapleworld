import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AndroidStatusBars from "../../src/components/AndroidStatusBars";
import Icon from "../../src/components/Icon";
import TabBar from "../../src/components/TabBar";
import MSGSCard from "../../src/components/MSGSCard";

const MainDP = () => {
  const navigate = useNavigate();

  const onMSGSCardContainerClick = useCallback(() => {
    navigate("/contents");
  }, [navigate]);

  const onAppBarIconsClick = useCallback(() => {
    navigate("/sidebar");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onSearchStateContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/dpbr-profile");
  }, [navigate]);

  return (
    <div className="w-full relative bg-background-background00 overflow-hidden flex flex-col items-start justify-start gap-20 leading-[normal] tracking-[normal]">
      <main className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky">
          <AndroidStatusBars
            frameDivAlignSelf="stretch"
            frameDivPosition="unset"
            frameDivTop="unset"
            frameDivLeft="unset"
            frameDivWidth="unset"
          />
          <div className="self-stretch shadow-[0px_2px_4px_rgba(0,_0,_0,_0.04)] bg-background-background00 flex flex-row items-center justify-between py-2 px-3 gap-5">
            <div className="flex flex-row items-center justify-start gap-2">
              <div
                className="flex flex-row items-start justify-start p-2 cursor-pointer"
                onClick={onAppBarIconsClick}
              >
                <Icon />
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
              <div
                className="flex flex-row items-start justify-start p-2 cursor-pointer"
                onClick={onSearchStateContainerClick}
              >
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
        </section>
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-xl text-text-text800 font-dpbr-typography-f12-md">
          <div className="flex-1 flex flex-col items-start justify-start gap-6 max-w-full">
            <TabBar
              propAlignSelf="stretch"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propWidth="unset"
              propOverflowX="auto"
              propFlex="unset"
              tab="전체"
              tab1="단풍바람 DP"
              tab2="단풍바람 BR"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <h2 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-[inherit]">
                  단풍바람 DP
                </h2>
                <div className="self-stretch h-[22px] relative text-base leading-[140%] text-text-text500 flex items-center">
                  단풍바람 DP 크리에이터의 메생결산을 만나보세요.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-sm text-text-text800 font-dpbr-typography-f12-md">
          <div className="flex-1 flex flex-col items-start justify-start gap-3 max-w-full">
            <div
              className="self-stretch shadow-[1px_1px_4px_rgba(0,_0,_0,_0.08)] rounded-xl bg-background-background00 overflow-hidden flex flex-row flex-wrap items-start justify-start [row-gap:20px] cursor-pointer"
              onClick={onMSGSCardContainerClick}
            >
              <img
                className="self-stretch w-[156px] relative max-h-full object-cover min-h-[90px]"
                loading="lazy"
                alt=""
                src="/rectangle-12@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-3 pb-3 box-border gap-3 min-w-[122px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
                  <div className="self-stretch relative leading-[140%] font-medium whitespace-nowrap">
                    미나의 메생을 보시겟나용ㅇ
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[2.5px] text-xs text-text-text300">
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <div className="w-3.5 h-3.5 relative rounded-[50%] bg-text-text00" />
                    </div>
                    <div className="relative leading-[140%] font-medium inline-block min-w-[37px]">
                      강민아
                    </div>
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <img
                        className="w-3.5 h-[15px] relative"
                        loading="lazy"
                        alt=""
                        src="/dpbr-badge2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-2 text-xs text-text-text300">
                  <div className="rounded-81xl flex flex-row items-start justify-start gap-0.5">
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <img
                        className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon-11.svg"
                      />
                    </div>
                    <div className="relative leading-[17px] inline-block min-w-[8px]">
                      0
                    </div>
                  </div>
                  <div className="rounded-81xl flex flex-row items-start justify-start gap-0.5">
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <img
                        className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon-21.svg"
                      />
                    </div>
                    <div className="relative leading-[17px] font-medium inline-block min-w-[8px]">
                      0
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MSGSCard
              propFlexWrap="wrap"
              onMSGSCardContainerClick={onMSGSCardContainerClick}
              propRowGap="20px"
              propHeight="unset"
              propFlex="unset"
              propHeight1="90px"
              propMinWidth="unset"
              propAlignSelf="unset"
              propMinWidth1="122px"
              prop="준향이의 메생결산"
              propPadding="unset"
              propHeight2="unset"
              prop1="정준형"
              propMinWidth2="37px"
              propHeight3="unset"
              dPBRBadge="/dpbr-badge2.svg"
              propPadding1="unset"
              propHeight4="unset"
              propHeight5="unset"
            />
            <MSGSCard
              propFlexWrap="unset"
              onMSGSCardContainerClick={onMSGSCardContainerClick}
              propRowGap="20px"
              propHeight="unset"
              propFlex="unset"
              propHeight1="110px"
              propMinWidth="156px"
              propAlignSelf="unset"
              propMinWidth1="122px"
              prop="타루카루타루카루타루카루타"
              propPadding="unset"
              propHeight2="14px"
              prop1="김윤"
              propMinWidth2="25px"
              propHeight3="15px"
              dPBRBadge="/dpbr-badge2.svg"
              propPadding1="unset"
              propHeight4="14px"
              propHeight5="14px"
            />
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

export default MainDP;
