import PropTypes from 'prop-types';

const GameTitle = ({ title }) => (
  <div className="flex-1 overflow-hidden flex flex-row items-start justify-start pb-0.5 box-border">
    <div className="flex-1 relative tracking-tight leading-4 font-medium shrink-0">
      {title}
    </div>
  </div>
);

GameTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default GameTitle;
