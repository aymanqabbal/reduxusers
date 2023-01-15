export function addUser(name, email) {
  return {
    type: "addUser",
    payload: { name: name, email: email },
  };
}
export function deleteUser(name) {
  return {
    type: "deleteUser",
    payload: { name: name },
  };
}
export function modifyUser(name) {
  return {
    type: "modifyUser",
    payload: { name: name },
  };
}
