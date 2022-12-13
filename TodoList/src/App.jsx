import "./App.css";
import Api from "./component/Api";
import FormInput from "./component/FormInput";
import TodoList from "./component/TodoList";

function App() {
  return (
    <Api>
      <div className="Todo-Form">
        <FormInput />
        <TodoList />
      </div>
    </Api>
  );
}

export default App;
