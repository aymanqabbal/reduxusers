import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector, useStore } from "react-redux";
import User from "./User";
import { addUser, deleteUser, modifyUser } from "./config/actions";
import { useRef } from "react";
function App() {
  const store = useStore();
  const users = useSelector((state) => state.users);
  const newName = useRef();
  const newEmail = useRef();
  const dispatch = useDispatch();
  const elements = users.map((u) => {
    return <User u={u} />;
  });
  console.log(users);
  return (
    <div className="App">
      <div className="newUser">
        <input ref={newName} placeholder="name"></input>
        <input ref={newEmail} placeholder="email"></input>
        <button
          onClick={() => {
            dispatch(addUser(newName.current.value, newEmail.current.value));
            console.log(addUser);
          }}
        >
          add new user
        </button>
      </div>
      <div className="users">{elements}</div>
    </div>
  );
}

export default App;
