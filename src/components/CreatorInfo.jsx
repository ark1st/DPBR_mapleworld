import PropTypes from 'prop-types';
import ProfileImage from './ProfileImage';

const CreatorInfo = ({ profileImage, name, badgeImage }) => (
    <div className="flex flex-row items-end justify-start py-1">
        <ProfileImage src={profileImage} alt={name}/>
        <div className="flex items-end overflow-hidden ">
            <div className="relative min-w-12 shrink-0 inline-block leading-4 tracking-tight ">
                {name}
            </div>
        </div>
        <div className="flex flex-col items-start justify-end">
            <img
                className="w-4 h-4 relative"
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
