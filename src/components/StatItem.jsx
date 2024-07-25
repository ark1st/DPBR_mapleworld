import PropTypes from 'prop-types';

const StatItem = ({ iconSrc, value, extraClass = '', valueClass = '' }) => (
  <div className={`flex flex-row items-start justify-start ${extraClass}`}>
    <img
      className="h-2.5 w-2.5 relative overflow-hidden shrink-0 min-h-2.5"
      loading="lazy"
      alt=""
      src={iconSrc}
    />
    <div className={`relative tracking-tight leading-3 inline-block ${valueClass}`}>
      {value}
    </div>
  </div>
);

StatItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  valueClass: PropTypes.string,
};

export default StatItem;
