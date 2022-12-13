import React, { useContext } from "react";
import { DataContext, DataEdit, FunctionAll } from "./Api";

function TodoList() {
  const [todo, setTodo] = useContext(DataContext);
  const { handleDelete, complete, edit } = useContext(FunctionAll);
  const [editTodo, setEditTodo] = useContext(DataEdit);
  console.log(todo);

  return (
    <ul className="TodoList">
      {todo.map((item, index) => {
        return (
          <li key={index} id={item.id}>
            <label htmlFor={item.id}>
              <input
                type="checkbox"
                id={item.id}
                onChange={() => complete(item.id)}
              />
              {item.name}
            </label>
            <button onClick={() => edit()}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Remove</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
