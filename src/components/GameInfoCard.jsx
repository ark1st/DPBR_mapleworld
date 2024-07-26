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
  playCount,
}) => {
  return (
      <div
          className={`self-stretch shadow-sm rounded-xl bg-white overflow-hidden flex flex-row items-start justify-start py-2 px-4 gap-4 text-left text-sm text-gray-400 font-poppins border border-gray-200 ${className}`}
      >
        <img
            className="h-20 w-36 flex-none overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src={gameImage}
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-2.5 pb-0 box-border">
          <div className="w-full flex flex-col items-start justify-start">
            <GameTitle title={gameTitle}/>
            <div className="w-full flex flex-col items-start justify-start gap-2.5 text-xs text-gray-300">
              <CreatorInfo
                  profileImage={creatorProfileImage}
                  name={creatorName}
                  badgeImage={badgeImage}
              />
              <div className="w-full flex flex-row items-start justify-start py-0 gap-1 text-2xs text-gray-500">
                <StatItem iconSrc="/icon-2.svg" value={likePercentage} extraClass="py-0 gap-1" valueClass="min-w-6"/>
                <StatItem iconSrc="/image-2.svg" value={likeCount} extraClass="py-0 gap-1" valueClass="min-w-8"/>
                <StatItem iconSrc="icon-3.svg" value={playCount} extraClass="py-0 gap-1"
                          valueClass="min-w-9 font-semibold"/>
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
  playCount: PropTypes.string.isRequired,
};

export default GameInfoCard;
