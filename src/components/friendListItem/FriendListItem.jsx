import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListCard}>
      <img className={css.friendListImg} src={avatar} alt="Avatar" width="78" />
      <p className={css.friendListName}>{name}</p>
      <p className={isOnline ? css.Online : css.Offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
