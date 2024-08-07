// Main.js
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/Appbar/AppBar";
import TabBar from "../components/TabBar";
import Footer from "../components/Footer/Footer";
import MSGSSection from "../components/MSGSSection/MSGSSection"; // 추가: 분리된 MSGSection 컴포넌트 가져오기

const msgCardsDataDP = [
  {
    title: "미나의 메생을 보시겟나용ㅇ",
    author: "강민아",
    badgeImage: "/dpbr-badge2.svg",
    coverImage: "/rectangle-12@2x.png",
  },
  {
    title: "준향이의 메생결산",
    author: "정준형",
    badgeImage: "/dpbr-badge2.svg",
    coverImage: "/rectangle-12@2x.png", // Cover image 추가
  },
  {
    title: "타루카루타루카루타루카루타",
    author: "김윤",
    badgeImage: "/dpbr-badge2.svg",
    coverImage: "/rectangle-12@2x.png", // Cover image 추가
  },
];

const msgCardsDataBR = [
  {
    title: "미나의 메생을 보시겟나용ㅇ",
    author: "강민아",
    badgeImage: "/dpbr-badge1.svg",
    coverImage: "/rectangle-12@2x.png", // Cover image 추가
  },
  {
    title: "준향이의 메생결산",
    author: "정준형",
    badgeImage: "/dpbr-badge1.svg",
    coverImage: "/rectangle-12@2x.png", // Cover image 추가
  },
  {
    title: "타루카루타루카루타루카루타",
    author: "김윤",
    badgeImage: "/dpbr-badge1.svg",
    coverImage: "/rectangle-12@2x.png", // Cover image 추가
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
      <Footer />
    </div>
  );
};

export default Main;
