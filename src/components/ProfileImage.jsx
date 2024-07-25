import PropTypes from 'prop-types';

const ProfileImage = ({ src, alt }) => (
  <img
    className="h-4 w-4 relative rounded-lg object-cover min-h-4"
    loading="lazy"
    alt={alt}
    src={src}
  />
);

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ProfileImage;
