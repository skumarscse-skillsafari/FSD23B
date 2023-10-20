const ChildComponent = ({ age, city, designation }) => {
  // console.log(props); // let props = {age:.., city:..., designation:...}
  return (
    <div className="child">
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Designation: {designation}</p>
    </div>
  );
};

export default ChildComponent;
