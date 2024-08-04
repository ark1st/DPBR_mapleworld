import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MSGSCard from "../components/MSGSCard";
import TabBar from "../components/TabBar";
import SearchState from "../components/SearchState";
import AndroidStatusBars from "../components/AndroidStatusBars";

const Main1 = () => {
  const navigate = useNavigate();

  const onMSGSCardContainerClick = useCallback(() => {
    navigate("/contents");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onSearchActionContainerClick = useCallback(() => {
    navigate("/dpbr-profile");
  }, [navigate]);

  return (
    <div className="w-full h-[1182px] relative bg-background-background00 overflow-hidden leading-[normal] tracking-[normal] text-left text-xl text-text-text800 font-dpbr-typography-f12-md">
      <h2 className="m-0 absolute top-[178px] left-[20px] text-inherit leading-[140%] font-bold font-[inherit] flex items-center w-[335px]">
        단풍바람 DP
      </h2>
      <div className="absolute top-[206px] left-[20px] text-base leading-[140%] text-text-text500 flex items-center w-[335px]">
        단풍바람 DP 크리에이터의 메생결산을 만나보세요.
      </div>
      <section className="absolute top-[244px] left-[16px] w-[343px] h-[314px] flex flex-col items-start justify-start gap-3">
        <MSGSCard
          propFlexWrap="unset"
          onMSGSCardContainerClick={onMSGSCardContainerClick}
          propRowGap="unset"
          propHeight="90px"
          propFlex="unset"
          propHeight1="unset"
          propMinWidth="unset"
          propAlignSelf="stretch"
          propMinWidth1="unset"
          prop="미나의 메생을 보시겟나용ㅇ"
          propPadding="0px 20px 0px 0px"
          propHeight2="unset"
          prop1="강민아"
          propMinWidth2="37px"
          propHeight3="unset"
          dPBRBadge="/dpbr-badge2.svg"
          propPadding1="0px 20px 0px 0px"
          propHeight4="unset"
          propHeight5="unset"
        />
        <MSGSCard
          propFlexWrap="unset"
          onMSGSCardContainerClick={onMSGSCardContainerClick}
          propRowGap="unset"
          propHeight="90px"
          propFlex="unset"
          propHeight1="unset"
          propMinWidth="unset"
          propAlignSelf="stretch"
          propMinWidth1="unset"
          prop="준향이의 메생결산"
          propPadding="0px 20px 0px 0px"
          propHeight2="unset"
          prop1="정준형"
          propMinWidth2="37px"
          propHeight3="unset"
          dPBRBadge="/dpbr-badge2.svg"
          propPadding1="0px 20px 0px 0px"
          propHeight4="unset"
          propHeight5="unset"
        />
        <MSGSCard
          propFlexWrap="unset"
          onMSGSCardContainerClick={onMSGSCardContainerClick}
          propRowGap="unset"
          propHeight="unset"
          propFlex="1"
          propHeight1="unset"
          propMinWidth="unset"
          propAlignSelf="stretch"
          propMinWidth1="unset"
          prop="타루카루타루카루타루카루타"
          propPadding="0px 20px 0px 0px"
          propHeight2="unset"
          prop1="김윤"
          propMinWidth2="25px"
          propHeight3="unset"
          dPBRBadge="/dpbr-badge2.svg"
          propPadding1="0px 20px 0px 0px"
          propHeight4="unset"
          propHeight5="unset"
        />
      </section>
      <h2 className="m-0 absolute top-[598px] left-[20px] text-inherit leading-[140%] font-bold font-[inherit] whitespace-pre-wrap flex items-center w-[335px]">
        단풍바람 BR
      </h2>
      <div className="absolute top-[626px] left-[20px] text-base leading-[140%] text-text-text500 flex items-center w-[335px]">
        단풍바람 BR 크리에이터의 메생결산을 만나보세요.
      </div>
      <section className="absolute top-[664px] left-[16px] w-[343px] h-[314px] flex flex-col items-start justify-start gap-3 text-left text-sm text-text-text800 font-dpbr-typography-f12-md">
        <div
          className="self-stretch h-[90px] shadow-[1px_1px_4px_rgba(0,_0,_0,_0.08)] rounded-xl bg-background-background00 overflow-hidden shrink-0 flex flex-row items-center justify-start cursor-pointer"
          onClick={onMSGSCardContainerClick}
        >
          <div className="self-stretch w-[156px] relative bg-text-text00" />
          <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-3 pb-3 gap-3">
            <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
              <div className="self-stretch relative leading-[140%] font-medium whitespace-nowrap">
                미나의 메생을 보시겟나용ㅇ
              </div>
              <div className="flex flex-row items-center justify-start py-0 pl-0 pr-5 gap-[2.5px] text-xs text-text-text300">
                <div className="h-3.5 w-3.5 relative rounded-[50%] bg-text-text00" />
                <div className="relative leading-[140%] font-medium inline-block min-w-[37px]">
                  강민아
                </div>
                <img
                  className="h-[15px] w-3.5 relative"
                  loading="lazy"
                  alt=""
                  src="/dpbr-badge1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-0 pl-0 pr-5 gap-2 text-xs text-text-text300">
              <div className="rounded-81xl flex flex-row items-center justify-start gap-0.5">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-11.svg"
                />
                <div className="relative leading-[17px] inline-block min-w-[8px]">
                  0
                </div>
              </div>
              <div className="rounded-81xl flex flex-row items-center justify-start gap-0.5">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-21.svg"
                />
                <div className="relative leading-[17px] font-medium inline-block min-w-[8px]">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch h-[90px] shadow-[1px_1px_4px_rgba(0,_0,_0,_0.08)] rounded-xl bg-background-background00 overflow-hidden shrink-0 flex flex-row items-center justify-start cursor-pointer"
          onClick={onMSGSCardContainerClick}
        >
          <div className="self-stretch w-[156px] relative bg-text-text00" />
          <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-3 pb-3 gap-3">
            <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
              <div className="self-stretch relative leading-[20px] font-medium">
                준향이의 메생결산
              </div>
              <div className="flex flex-row items-center justify-start py-0 pl-0 pr-5 gap-[2.5px] text-xs text-text-text300">
                <div className="h-3.5 w-3.5 relative rounded-[50%] bg-text-text00" />
                <div className="relative leading-[140%] font-medium inline-block min-w-[37px]">
                  정준형
                </div>
                <img
                  className="h-[15px] w-3.5 relative"
                  loading="lazy"
                  alt=""
                  src="/dpbr-badge1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-0 pl-0 pr-5 gap-2 text-xs text-text-text300">
              <div className="rounded-81xl flex flex-row items-center justify-start gap-0.5">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-11.svg"
                />
                <div className="relative leading-[17px] inline-block min-w-[8px]">
                  0
                </div>
              </div>
              <div className="rounded-81xl flex flex-row items-center justify-start gap-0.5">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-21.svg"
                />
                <div className="relative leading-[17px] font-medium inline-block min-w-[8px]">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch flex-1 shadow-[1px_1px_4px_rgba(0,_0,_0,_0.08)] rounded-xl bg-background-background00 overflow-hidden flex flex-row items-center justify-start cursor-pointer"
          onClick={onMSGSCardContainerClick}
        >
          <div className="self-stretch w-[156px] relative bg-text-text00" />
          <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-3 pb-3 gap-3">
            <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
              <div className="self-stretch relative leading-[140%] font-medium">
                타루카루타루카루타루카루타
              </div>
              <div className="flex flex-row items-center justify-start py-0 pl-0 pr-5 gap-[3px] text-xs text-text-text300">
                <div className="h-3.5 w-3.5 relative rounded-[50%] bg-text-text00" />
                <div className="relative leading-[140%] font-medium inline-block min-w-[25px]">
                  김윤
                </div>
                <img
                  className="h-[15px] w-3.5 relative"
                  loading="lazy"
                  alt=""
                  src="/dpbr-badge1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-0 pl-0 pr-5 gap-2 text-xs text-text-text300">
              <div className="rounded-81xl flex flex-row items-center justify-start gap-0.5">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-11.svg"
                />
                <div className="relative leading-[17px] inline-block min-w-[8px]">
                  0
                </div>
              </div>
              <div className="rounded-81xl flex flex-row items-center justify-start gap-0.5">
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon-21.svg"
                />
                <div className="relative leading-[17px] font-medium inline-block min-w-[8px]">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="absolute bottom-[0px] left-[calc(50%_-_187.5px)] bg-background-background20 w-[375px] h-[120px] overflow-hidden">
        <img
          className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_39.5px)] w-20 h-[21.9px] object-cover mix-blend-luminosity"
          loading="lazy"
          alt=""
          src="/image-92@2x.png"
        />
      </section>
      <TabBar
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="104px"
        propLeft="calc(50% - 171.5px)"
        propWidth="343px"
        propOverflowX="auto"
        propFlex="unset"
        tab="전체"
        tab1="단풍바람 DP"
        tab2="단풍바람 BR"
      />
      <section className="absolute top-[calc(50%_-_591px)] left-[calc(50%_-_187.5px)] bg-gray w-full h-full z-[1]" />
      <div className="absolute top-[32px] left-[0px] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.04)] bg-background-background00 w-full flex flex-row items-center justify-between py-2 px-3 box-border gap-0 [row-gap:20px] z-[2]">
        <div
          className="flex flex-row items-start justify-start p-2 cursor-pointer"
          onClick={onLogoContainerClick}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icon.svg"
          />
        </div>
        <div className="w-[311px] flex flex-row items-center justify-end gap-2">
          <SearchState />
          <div
            className="flex flex-row items-center justify-center p-1 cursor-pointer"
            onClick={onSearchActionContainerClick}
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
    
    </div>
  );
};

export default Main1;
