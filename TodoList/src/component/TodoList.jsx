import React, { useContext } from "react";
import { DataContext, DataEdit, FunctionAll } from "./Api";

function TodoList() {
  const [todo, setTodo] = useContext(DataContext);
  const {
    handleDelete,
    complete,
    edit,
    SaveEdit,
    handleEdit,
    completeAll,
    handleDeleteAll,
  } = useContext(FunctionAll);
  const [editTodo, setEditTodo] = useContext(DataEdit);
  console.log(todo);

  return (
    <>
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
                <button onClick={() => SaveEdit(item.id, editTodo)}>
                  Save
                </button>
              </li>
            );
          }
          return (
            <li key={index} id={item.id}>
              <label htmlFor={item.id}>
                <input
                  type="checkbox"
                  checked={item.complete}
                  id={item.id}
                  value={editTodo}
                  onChange={() => complete(item.id)}
                />
                {item.name}
              </label>
              <button disabled={item.complete} onClick={() => edit(item.id)}>
                Edit
              </button>
              <button
                disabled={item.complete}
                onClick={() => handleDelete(item.id)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <label htmlFor="">
          <input type="checkbox" onChange={() => completeAll()} />
          All
        </label>
        <p>
          {" "}
          {todo.filter((item) => item.complete === true).length} of {""}
          {todo.length} tasks dons
        </p>
        <button onClick={() => handleDeleteAll()}>Remove Checked</button>
      </div>
    </>
  );
}

export default TodoList;
