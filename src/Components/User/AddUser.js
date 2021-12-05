import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (evt) => {
    setEnteredName(evt.target.value);
  };

  const ageChangeHandler = (evt) => {
    setEnteredAge(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 0) {
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    setEnteredAge("");
    setEnteredName("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          autoComplete="off"
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
          autoComplete="off"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
