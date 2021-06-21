//initial
import React, { useState } from "react";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";
//materialize
import "materialize-css";
//local db
import usersData from "./model/users";
//router
import { Route } from "react-router";

function App() {
  const [isSort, setIsort] = useState(false);
  const [users, setUsers] = useState(usersData);

  function removeUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  function saveUser(currentUser) {
    const user = users.filter((user) => user.id !== currentUser.id);
    setUsers([currentUser, ...user]);
  }

  function sortByName() {
    const usersTemp = [...users];
    if (!isSort) {
      setIsort(true);
      usersTemp.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
      setUsers(usersTemp);
    } else {
      setIsort(false);
      setUsers(usersData);
    }
  }

  return (
    <div className="container">
      <Route
        path="/"
        exact
        render={() => (
          <UsersList
            users={users}
            removeUser={removeUser}
            sortByName={sortByName}
          />
        )}
      />
      <Route
        path="/edit/:userId"
        render={() => <EditUser users={users} saveUser={saveUser} />}
      />
    </div>
  );
}

export default App;
