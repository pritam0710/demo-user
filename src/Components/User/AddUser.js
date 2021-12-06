import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (evt) => {
    setEnteredName(evt.target.value);
  };

  const ageChangeHandler = (evt) => {
    setEnteredAge(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        msg: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 0) {
      setError({
        title: "Invalid age",
        msg: "Please enter a valid age (> 0 ).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    setEnteredAge("");
    setEnteredName("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        />
      )}
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
    </>
  );
};

export default AddUser;
