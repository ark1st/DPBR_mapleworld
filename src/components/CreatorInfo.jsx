import PropTypes from 'prop-types';
import ProfileImage from './ProfileImage';

const CreatorInfo = ({ profileImage, name, badgeImage }) => (
  <div className="flex flex-row items-end justify-start">
    <ProfileImage src={profileImage} alt={name} />
    <div className="overflow-hidden flex flex-row items-end justify-start pb-0.5">
      <div className="relative tracking-tight leading-4 inline-block min-w-12 shrink-0">
        {name}
      </div>
    </div>
    <div className="flex flex-col items-start justify-end pb-0.5">
      <img
        className="w-3 h-3 relative"
        loading="lazy"
        alt=""
        src={badgeImage}
      />
    </div>
  </div>
);

CreatorInfo.propTypes = {
  profileImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  badgeImage: PropTypes.string.isRequired,
};

export default CreatorInfo;
