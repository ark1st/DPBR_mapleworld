import FrameComponent from "../../src/components/FrameComponent";
import Content from "../../src/components/Content";
import MessageList from "../../src/components/MessageList";

const SideBar = () => {
  return (
    <div className="w-full h-[667px] relative bg-background-background00 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[105px] box-border gap-[94px] leading-[normal] tracking-[normal] text-left text-xl text-text-text800 font-dpbr-typography-f12-md">
      <b className="self-stretch relative leading-[140%] hidden max-w-full z-[0]">
        단풍바람 DP
      </b>
      <div className="w-[335px] h-[22px] absolute !m-[0] top-[210px] left-[calc(50%_-_167.5px)] text-base leading-[140%] text-text-text500 flex items-center">
        단풍바람 DP 크리에이터의 메생결산을 만나보세요.
      </div>
      <FrameComponent />
      <b className="self-stretch relative leading-[140%] hidden whitespace-pre-wrap max-w-full z-[3]">
        단풍바람 BR
      </b>
      <div className="w-[335px] h-[22px] absolute !m-[0] bottom-[15px] left-[calc(50%_-_167.5px)] text-base leading-[140%] text-text-text500 flex items-center z-[4]">
        단풍바람 BR 크리에이터의 메생결산을 만나보세요.
      </div>
      <Content />
      <section className="w-full h-[1182px] absolute !m-[0] right-[0px] bottom-[-258px] left-[0px] bg-gray z-[1]" />
      <MessageList />
    </div>
  );
};

export default SideBar;
