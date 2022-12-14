import React, { useContext, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { DataAddTodo, DataContext, FunctionAll } from "./Api";

function FormInput() {
  const [addTodo, setAddTodo] = useContext(DataAddTodo);
  const [todo, setTodo] = useContext(DataContext);
  const { onSubmit, handleChange } = useContext(FunctionAll);

  return (
    <form className="FormInput" autoComplete="off" onSubmit={onSubmit}>
      <input
        className="FormInput_Input"
        size={50}
        type="text"
        placeholder="Add ToDo"
        value={addTodo}
        onChange={handleChange}
      />
      <button className="FormInput_button" type="submit">
        <BsPlusLg />
      </button>
    </form>
  );
}

export default FormInput;
