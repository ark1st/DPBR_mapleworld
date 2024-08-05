// Main.js
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import TabBar from "../components/TabBar";
import FooterContainer from "../components/FooterContainer";
import MSGSSection from "../components/MSGSSection"; // 추가: 분리된 MSGSection 컴포넌트 가져오기

// MSGSCard 데이터를 배열로 관리
const msgCardsDataDP = [
  {
    prop: "미나의 메생을 보시겟나용ㅇ",
    prop1: "강민아",
    dPBRBadge: "/dpbr-badge2.svg",
    image: "/rectangle-12@2x.png"
  },
  {
    prop: "준향이의 메생결산",
    prop1: "정준형",
    dPBRBadge: "/dpbr-badge2.svg",
  },
  {
    prop: "타루카루타루카루타루카루타",
    prop1: "김윤",
    dPBRBadge: "/dpbr-badge2.svg",
  },
];

const msgCardsDataBR = [
  {
    prop: "미나의 메생을 보시겟나용ㅇ",
    prop1: "강민아",
    dPBRBadge: "/dpbr-badge1.svg",
  },
  {
    prop: "준향이의 메생결산",
    prop1: "정준형",
    dPBRBadge: "/dpbr-badge1.svg",
  },
  {
    prop: "타루카루타루카루타루카루타",
    prop1: "김윤",
    dPBRBadge: "/dpbr-badge1.svg",
  },
];

const Main = () => {
  const navigate = useNavigate();

  // 클릭 핸들러 정의
  const onMSGSCardContainerClick = useCallback(() => {
    navigate("/contents");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/main");
  }, [navigate]);

  const onSearchStateContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchInputContainerClick = useCallback(() => {
    navigate("/dpbr-profile");
  }, [navigate]);

  return (
    <div className="w-full relative bg-background-background00 overflow-hidden flex flex-col items-start justify-start gap-10 leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-left text-xl text-text-text800 font-dpbr-typography-f12-md">
        <div className="self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky">
          {/* AppBar 컴포넌트 추가 */}
          <AppBar onFrameContainerClick={onFrameClick} />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-6 max-w-full">
            <TabBar tab="전체" tab1="단풍바람 DP" tab2="단풍바람 BR" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
          <MSGSSection
            title="단풍바람 DP"
            description="단풍바람 DP 크리에이터의 메생결산을 만나보세요."
            msgCardsData={msgCardsDataDP}
            onCardClick={onMSGSCardContainerClick}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
          <MSGSSection
            title="단풍바람 BR"
            description="단풍바람 BR 크리에이터의 메생결산을 만나보세요."
            msgCardsData={msgCardsDataBR}
            onCardClick={onMSGSCardContainerClick}
          />
        </div>
      </section>
      <FooterContainer />
    </div>
  );
};

export default Main;
