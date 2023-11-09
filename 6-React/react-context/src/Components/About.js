import Profile from "./Profile";
import { UserState } from "../Context/Context";

const About = () => {
  //   console.log(UserState());
  const { userData, setUserData } = UserState();

  const updateName = () => {
    setUserData((prev) => {
      return {
        ...prev,
        name: "Prince",
      };
    });
  };
  return (
    <div className="about">
      <h2>About Component</h2>
      <p>{userData.name}</p>
      <p>{userData.age}</p>
      <button onClick={updateName}>Update name</button>
      <Profile />
    </div>
  );
};

export default About;
