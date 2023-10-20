import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  // props => Pass the value from parent component to child component
  let userDetails = {
    firstName: "John",
    lastName: "Jack",
    age: 20,
    isAdmin: true,
    city: "Chennai",
    designation: "Associate Software Engineer",
  };
  return (
    <div className="parent">
      <h2>Parent Component</h2>
      <h2>FirstName: {userDetails.firstName}</h2>
      <h2>LastName: {userDetails.lastName}</h2>
      <ChildComponent
        age={userDetails.age}
        city={userDetails.city}
        designation={userDetails.designation}
      />
    </div>
  );
};

export default ParentComponent;
