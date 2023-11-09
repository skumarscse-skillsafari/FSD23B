import { UserState } from "../Context/Context";

const Contact = () => {
  //   console.log(UserState());
  const { userData } = UserState();
  return (
    <div className="contact">
      <h2>Contact Component</h2>
      <p>{userData.name}</p>
      <p>{userData.isAdmin ? "True" : "False"}</p>
      <p>{userData.city}</p>
    </div>
  );
};

export default Contact;
