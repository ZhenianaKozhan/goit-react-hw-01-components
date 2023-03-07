import PropTypes from 'prop-types';
import { FriendItem, Marker } from './FriendList.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <FriendItem key={id}>
        <Marker isOnline={isOnline}></Marker>
        <img src={avatar} alt="User avatar" />
        <p>{name}</p>
      </FriendItem>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
