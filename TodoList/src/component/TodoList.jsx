import React, { useContext } from "react";
import { DataContext, DataEdit, FunctionAll } from "./Api";
import { CiCircleRemove, CiEdit } from "react-icons/ci";

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
              <li key={index} id={item.id} className="TodoList_item">
                <input
                  size="40"
                  className="TodoList_item-input"
                  type="text"
                  id={item.id}
                  value={editTodo}
                  onChange={handleEdit}
                />
                <button
                  className="TodoList_item-button"
                  onClick={() => SaveEdit(item.id, editTodo)}
                >
                  Save
                </button>
              </li>
            );
          }
          return (
            <li key={index} id={item.id} className="TodoList_item">
              <label
                htmlFor={item.id}
                className={
                  item.complete === true
                    ? "active TodoList_item-lable"
                    : "TodoList_item-lable"
                }
              >
                <input
                  type="checkbox"
                  checked={item.complete}
                  id={item.id}
                  value={editTodo}
                  onChange={() => complete(item.id)}
                />
                {item.name}
              </label>
              <div className="TodoList_item-contianer_button">
                <button
                  className="TodoList_item-button"
                  disabled={item.complete}
                  onClick={() => edit(item.id)}
                >
                  <CiEdit />
                </button>
                <button
                  className="TodoList_item-button"
                  disabled={item.complete}
                  onClick={() => handleDelete(item.id)}
                >
                  <CiCircleRemove />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="TodoList_Fotter">
        <label htmlFor="" className="TodoList_Fotter-lable">
          <input type="checkbox" onChange={() => completeAll()} />
          All
        </label>
        <p>
          {" "}
          {todo.filter((item) => item.complete === true).length} of {""}
          {todo.length} tasks dons
        </p>
        <button
          className="TodoList_Fotter-button"
          onClick={() => handleDeleteAll()}
        >
          Remove Checked
        </button>
      </div>
    </>
  );
}

export default TodoList;
