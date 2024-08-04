import MSGSCard from "./MSGSCard";
import SideBar1 from "./SideBar1";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-4 pb-3 box-border max-w-full shrink-0 ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start relative gap-3 shrink-0 max-w-full">
      <MSGSCard
        prop="미나의 메생을 보시겟나용ㅇ"
        prop1="강민아"
        dPBRBadge="/dpbr-badge2.svg"
        image="rectangle-12@2x"
      />
      <MSGSCard
        prop="준향이의 메생결산"
        prop1="정준형"
        dPBRBadge="/dpbr-badge2.svg"
      />
      <MSGSCard
        prop="타루카루타루카루타루카루타"
        prop1="김윤"
        dPBRBadge="/dpbr-badge2.svg"
      />

        <SideBar1 propTop="-160px" propLeft="-16px" propMargin="0 !important" />
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
