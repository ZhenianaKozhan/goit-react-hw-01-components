import { Container } from 'components/BasicStyled/Container.styled';
import { FriendListItem } from 'components/FriendList/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <ul>
        <FriendListItem friends={friends} />
      </ul>
    </Container>
  );
};
