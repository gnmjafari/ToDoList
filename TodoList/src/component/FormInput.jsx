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
        type="text"
        placeholder="Add ToDo"
        value={addTodo}
        onChange={handleChange}
      />
      <button type="submit">
        <BsPlusLg />
      </button>
    </form>
  );
}

export default FormInput;
