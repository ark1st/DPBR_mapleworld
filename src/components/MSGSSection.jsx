// MSGSection.js
import React from "react";
import MSGSCard from "../components/MSGSCard";

const MSGSSection = ({ title, description, msgCardsData, onCardClick }) => (
  <div className="flex flex-col items-start justify-start gap-4 w-full">
    {/* 컨테이너: 화면 너비에 따라 유연하게 확장되는 flexbox 컨테이너 */}
    <div className="flex flex-row items-start justify-start py-0 px-1 box-border w-full">
      {/* 내부 컨테이너: 제목과 설명을 포함하며 flex-1로 확장됨 */}
      <div className="flex-1 flex flex-col items-start justify-start w-full">
        <h2 className="m-0 w-full relative text-inherit leading-[140%] font-bold font-[inherit] whitespace-pre-wrap">
          {/* 제목: 부모 요소의 너비를 전부 차지하며 글꼴 상속 및 줄 간격 조절 */}
          {title}
        </h2>
        <div className="w-full h-6 relative text-base leading-[140%] text-text-text500 flex items-center">
          {/* 설명: 높이를 h-6으로 설정하여 px 대신 Tailwind의 크기 단위 사용 */}
          {description}
        </div>
      </div>
    </div>
    <div className="flex flex-col items-start justify-start gap-3 text-sm w-full">
      {/* 메시지 카드: 카드 데이터를 맵핑하여 각 카드에 대한 클릭 핸들러 설정 */}
      {msgCardsData.map((cardData, index) => (
        <MSGSCard
          key={index}
          {...cardData}
          onMSGSCardContainerClick={onCardClick}
        />
      ))}
    </div>
  </div>
);

export default MSGSSection;
