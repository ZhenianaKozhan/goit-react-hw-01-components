import { FriendListItem } from 'components/FriendList/FriendListItem'

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            <FriendListItem friends={friends} />
        </ul>
    )
}