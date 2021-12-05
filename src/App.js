import React, { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (name, age) => {
    const user = {
      name,
      age,
      id: Math.random().toString(),
    };
    setUserList((prevState) => {
      return [...prevState, user];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
