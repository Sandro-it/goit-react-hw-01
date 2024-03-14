import FriendListItem from "../friendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      <li>
        {friends.map((friend) => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
        ;
      </li>
    </ul>
  );
};

export default FriendList;
