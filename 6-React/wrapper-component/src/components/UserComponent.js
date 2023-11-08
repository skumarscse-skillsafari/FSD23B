const UserComponent = () => {
  const userDetails = [
    { id: 1, username: "Jack", age: 20, isAdmin: false },
    { id: 2, username: "John", age: 18, isAdmin: true },
    { id: 3, username: "Mary", age: 22, isAdmin: false },
    { id: 4, username: "Robert", age: 25, isAdmin: true },
    { id: 5, username: "Prince", age: 21, isAdmin: false },
  ];
  return (
    <div>
      <h2>UserComponent</h2>
      {userDetails.map((user) => {
        return (
          <div key={user.id}>
            <h2>Username: {user.username}</h2>
            <p>Age: {user.age}</p>
            <p>isAdmin: {user.isAdmin ? "True" : "False"}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default UserComponent;
