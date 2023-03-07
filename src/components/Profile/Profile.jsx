import { Container } from 'components/BasicStyled/Container.styled';
import PropTypes from 'prop-types';
import { Description, Stats } from './Profile.styled';

export const Profile = props => {
  const { avatar, username, tag, location, stats } = props;
  return (
    <Container>
      <Description>
        <img src={avatar} alt={username} />
        <h3>{username}</h3>
        <p>{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired),
  }),
};
