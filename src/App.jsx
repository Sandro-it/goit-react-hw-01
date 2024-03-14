import Profile from "./components/profile/Profile";
import userData from "./components/userData.json";
import FriendList from "./components/friendList/FriendList";
import friends from "./friends.json";

const App = () => {
  return (
    <>
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </>
      <>
        <FriendList friends={friends} />
      </>
    </>
  );
};

export default App;
