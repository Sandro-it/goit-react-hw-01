import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const userOnline = isOnline ? "Online" : "Offline";
  return (
    <div className={css.FriendListContainer}>
      <img className={css.FriendListImg} src={avatar} alt="Avatar" width="78" />
      <p className={css.FriendListName}>{name}</p>
      <p
        className={clsx(
          css.FriendListStatus,
          isOnline ? css.onLine : css.offLine
        )}
      >
        {userOnline}
      </p>
    </div>
  );
};

export default FriendListItem;
