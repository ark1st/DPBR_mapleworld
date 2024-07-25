import NavigationBar from "./NavigationBar";
import GameInfoCard from "./GameInfoCard";
import PropTypes from "prop-types";

const PartnerShowcase = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-8 max-w-full text-center text-sm text-gray-400 font-poppins ${className}`}
    >
      <NavigationBar />

      
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-5 pl-5 box-border max-w-full text-left text-xl">
        <div className="flex-1 flex flex-col items-start justify-start gap-3 max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-0.5 max-w-full">
            <div className="self-stretch flex flex-row items-end justify-between gap-5">
              <h2 className="m-0 relative text-inherit tracking-tight leading-6 font-bold font-inherit shrink-0">
                메월드 Partners
              </h2>
              <div className="w-13 flex flex-col items-start justify-end box-border text-center text-xs text-gray-400">
                <a className="no-underline self-stretch relative leading-5 text-inherit shrink-0">
                  전체보기
                </a>
              </div>
            </div>
            <h3 className="m-0 w-84 h-11 relative text-xs tracking-tight leading-5 font-normal font-inherit text-gray-300 flex items-center shrink-0 max-w-full">
              <span className="w-full">
                <p className="m-0">
                  메월드 Partners 크리에이터가 제작한 월드를 만나보세요.
                </p>
              </span>
            </h3>
          </div>

          <GameInfoCard
            gameImage="/link--eba994ec9db4ed948cec9b94eb939c-ec9584eba5b4ed858cec9dbc-960x540-ec8db8eb84a4ec9dbc-ec9984ec84b1-e62bba80bbdf4acb90c1161e3139aef9png@2x.png"
            gameTitle="아르테일"
            creatorProfileImage="/backgroundborder@2x.png"
            creatorName="룰루월드"
            badgeImage="/image.svg"
            likePercentage="96%"
            likeCount="(31.7k)"
            playIcon="/icon-3.svg"
            playCount="444.1k"
          />
          <GameInfoCard
            gameImage="/link--eba994eb9e9ceb949420170v20ec8db8eb84a4ec9dbc-e9cbc363f38e43bd890f389bc81b88cepng@2x.png"
            gameTitle="메이플 랜덤 디펜스dddddddddddddddd"
            creatorProfileImage="/container@2x.png"
            creatorName="김민현"
            badgeImage="/image-1.svg"
            likePercentage="97%"
            likeCount="(3.3k)"
            playIcon="/icon-5.svg"
            playCount="123.6k"
          />
        </div>
      </div>
    </div>
  );
};

PartnerShowcase.propTypes = {
  className: PropTypes.string,
};

export default PartnerShowcase;
