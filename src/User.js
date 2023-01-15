import React from "react";

export default function User(props) {
  const u = props.u;
  return (
    <div className="user">
      <h1>name: {u.name} </h1>
      <h1>email: {u.email} </h1>
      <button>modify</button>
      <button>delete</button>
      <hr></hr>
    </div>
  );
}
