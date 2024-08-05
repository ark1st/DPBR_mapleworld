import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import MSGSPersonalDescription from "../components/MSGSPersonalDescription";
import MSGSPersonalContents from "../components/MSGSPersonalContents";
import FooterContainer from "../components/FooterContainer";

const Contents = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-background-background00 overflow-hidden flex flex-col items-start justify-start gap-20 leading-[normal] tracking-[normal]">
      <main className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky">

          <AppBar onFrameContainerClick={onFrameContainerClick} />
        </section>
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-4 box-border max-w-full text-left text-base text-text-text800 font-dpbr-typography-f12-md">
          <div className="flex-1 flex flex-col items-start justify-start gap-8 max-w-full">
            <MSGSPersonalDescription />
            <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                <b className="flex-1 relative leading-[140%] inline-block max-w-full">
                  미나의 메생을 보시겟나용ㅇ
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-4">
                <MSGSPersonalContents
                  rectangle1="/rectangle-1@2x.png"
                  prop="2024. 07. 13."
                  prop1="잡로얄 넘 커엽다"
                  propWidth="unset"
                  propDisplay="inline-block"
                  propMinWidth="97px"
                />
                <MSGSPersonalContents
                  rectangle1="/rectangle-11@2x.png"
                  prop="2024. 07. 14."
                  prop1="졸업할수잇을까"
                  propWidth="unset"
                  propDisplay="inline-block"
                  propMinWidth="91px"
                />
                <MSGSPersonalContents
                  rectangle1="/rectangle-11@2x.png"
                  prop="2024. 07. 15."
                  prop1="날짜는 아래로 갈수록 최신순입니당"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterContainer />
    </div>
  );
};

export default Contents;
