import PropTypes from "prop-types";
import LegalLinks from "./LegalLinks";
import CompanyInfo from "./CompanyInfo";
import CompanyLogos from "./CompanyLogos";

const Footer = ({ className = "" }) => {
  return (
      <div
          className={`self-stretch flex flex-col items-center justify-start py-0 px-1 box-border max-w-full text-left text-xs text-gray-200 font-poppins ${className}`}>
        <div
            className="w-full max-w-3xl flex flex-col items-center justify-start pt-5 px-8 pb-5 gap-4 border-t border-solid border-whitesmoke-200">
          <div className="w-full flex flex-row items-center justify-center py-0 px-2">
            <LegalLinks/>
          </div>
          <div className="w-full flex flex-col items-center justify-start gap-1 text-center text-2xs text-gray-100">
            <CompanyInfo/>
            <CompanyLogos/>
          </div>
        </div>
      </div>

  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
