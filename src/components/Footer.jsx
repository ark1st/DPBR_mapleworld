import PropTypes from "prop-types";
import LegalLinks from "./LegalLinks";
import CompanyInfo from "./CompanyInfo";
import CompanyLogos from "./CompanyLogos";

const Footer = ({ className = "" }) => {
  return (
    <div className={`self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full text-left text-xs text-gray-200 font-poppins ${className}`}>
      <div className="flex-1 box-border flex flex-col items-end justify-start pt-[19px] px-[30px] pb-[19.6px] gap-[17.8px] max-w-full border-t-[1px] border-solid border-whitesmoke-200">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[7px] pl-2">
          <LegalLinks />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.4px] text-center text-2xs text-gray-100">
          <CompanyInfo />
          <CompanyLogos />
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
