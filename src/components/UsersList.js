import React from "react";
import UserItem from "./UserItem";

function UserList({ users, removeUser, sortByName }) {
  return (
    <>
      <h1>Список пользователей</h1>
      <form>
      <p>
      <label>
        <input type="checkbox" onChange={sortByName}/>
        <span>Сортировать по имени</span>
      </label>
    </p>
        </form>
      <ul>
        {users.map((user, i) => {
          return <UserItem user={user} removeUser={ removeUser } key={i} />;
        })}
      </ul>
    </>
  );
}

export default UserList;
