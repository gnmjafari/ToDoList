import React, { createContext, useState } from "react";

export const DataContext = createContext();
export const DataAddTodo = createContext();
export const FunctionAll = createContext();
export const DataEdit = createContext();

function Api(props) {
  const [todo, setTodo] = useState([]);
  const [addTodo, setAddTodo] = useState("");
  const [editTodo, setEditTodo] = useState(false);

  const handleChange = (event) => {
    setAddTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      name: addTodo,
      complete: false,
      edit: false,
    };
    setTodo(task.name !== "" ? [...todo, task] : todo);
    setAddTodo("");
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((task) => task.id !== id));
  };

  const complete = (id) => {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          return (
            (item.complete = !item.complete),
            { ...item, complete: item.complete }
          );
        } else {
          return item;
        }
      })
    );
  };

  const edit = () => {
    setEditTodo(true);
  };

  const Save = (id, name) => {};

  return (
    <FunctionAll.Provider
      value={{ onSubmit, handleChange, handleDelete, complete, edit }}
    >
      <DataEdit.Provider value={[editTodo, setEditTodo]}>
        <DataAddTodo.Provider value={[addTodo, setAddTodo]}>
          <DataContext.Provider value={[todo, setTodo]}>
            {props.children}
          </DataContext.Provider>
        </DataAddTodo.Provider>
      </DataEdit.Provider>
    </FunctionAll.Provider>
  );
}

export default Api;