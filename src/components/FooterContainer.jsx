import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FooterContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMSGSCardContainerClick = useCallback(() => {
    navigate("/contents");
  }, [navigate]);

  return (
    

    <section className="self-stretch h-[120px] relative bg-background-background20 overflow-hidden shrink-0">
    <img
      className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_39.5px)] w-20 h-[21.9px] object-cover mix-blend-luminosity"
      loading="lazy"
      alt=""
      src="/image-92@2x.png"
    />
    </section>
  );
};

FooterContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterContainer;
