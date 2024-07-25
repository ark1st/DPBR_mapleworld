import PropTypes from 'prop-types';
import GameTitle from './GameTitle.jsx';
import CreatorInfo from './CreatorInfo';
import StatItem from './StatItem';

const GameInfoCard = ({
  className = "",
  gameImage,
  gameTitle,
  creatorProfileImage,
  creatorName,
  badgeImage,
  likePercentage,
  likeCount,
  playIcon,
  playCount,
}) => {
  return (
    <div
      className={`self-stretch shadow-sm rounded-xl bg-white overflow-hidden flex flex-row items-start justify-start py-0 px-1 gap-2.5 text-left text-sm text-gray-400 font-poppins border border-gray-200 ${className}`}
    >
      <img
        className="h-20 w-36 relative overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={gameImage}
      />
      <div className="w-30 flex flex-col items-start justify-start pt-2.5 pb-0 box-border">
        <div className="self-stretch flex flex-col items-start justify-start">
          <GameTitle title={gameTitle} />
          <div className="self-stretch flex flex-col items-start justify-start gap-5 text-xs text-gray-300">
            <CreatorInfo
              profileImage={creatorProfileImage}
              name={creatorName}
              badgeImage={badgeImage}
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0 gap-0.5 text-2xs text-gray-500">
              <StatItem iconSrc="/icon-2.svg" value={likePercentage} extraClass="py-0 pr-0.5 pl-0 gap-0.5" valueClass="min-w-6" />
              <StatItem value={likeCount} extraClass="py-0 pr-0.5 pl-0 gap-0.5" valueClass="min-w-8" />
              <StatItem iconSrc={playIcon} value={playCount} extraClass="py-0 pr-0.5 pl-0 gap-0.5" valueClass="min-w-9 font-semibold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GameInfoCard.propTypes = {
  className: PropTypes.string,
  gameImage: PropTypes.string.isRequired,
  gameTitle: PropTypes.string.isRequired,
  creatorProfileImage: PropTypes.string.isRequired,
  creatorName: PropTypes.string.isRequired,
  badgeImage: PropTypes.string.isRequired,
  likePercentage: PropTypes.string.isRequired,
  likeCount: PropTypes.string.isRequired,
  playIcon: PropTypes.string.isRequired,
  playCount: PropTypes.string.isRequired,
};

export default GameInfoCard;
