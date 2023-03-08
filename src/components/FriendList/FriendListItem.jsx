import { FriendItem, Marker } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Marker isOnline={isOnline}></Marker>
      <img src={avatar} alt="User avatar" />
      <p>{name}</p>
    </FriendItem>
  );
};
