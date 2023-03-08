import PropTypes from 'prop-types';
import { Container } from 'components/BasicStyled/Container.styled';
import { FriendListItem } from 'components/FriendList/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </ul>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
