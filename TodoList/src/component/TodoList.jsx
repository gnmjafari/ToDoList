import React, { useContext } from "react";
import { DataContext, DataEdit, FunctionAll } from "./Api";

function TodoList() {
  const [todo, setTodo] = useContext(DataContext);
  const { handleDelete, complete, edit, SaveEdit, handleEdit } =
    useContext(FunctionAll);
  const [editTodo, setEditTodo] = useContext(DataEdit);
  console.log(todo);

  return (
    <ul className="TodoList">
      {todo.map((item, index) => {
        if (item.edit) {
          return (
            <li key={index} id={item.id}>
              <input
                type="text"
                id={item.id}
                value={editTodo}
                onChange={handleEdit}
              />
              <button onClick={() => SaveEdit(item.id, editTodo)}>Save</button>
              <button onClick={() => handleDelete(item.id)}>Remove</button>
            </li>
          );
        }
        return (
          <li key={index} id={item.id}>
            <label htmlFor={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={editTodo}
                onChange={() => complete(item.id)}
              />
              {item.name}
            </label>
            <button onClick={() => edit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Remove</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
