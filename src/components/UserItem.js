import React from "react";
import { NavLink } from "react-router-dom";

function UserItem({ user, removeUser }) {
  return (
    <li>
      <p className="user">
        {`Имя пользовалеля : ${user.name},
            Возраст : ${user.age},
            Номер телефона : ${user.phoneNumber},
            Страна проживания : ${user.country},
            Email : ${user.email}`}
      </p>
      <NavLink to={`/edit/${user.id}`} className="btn editBtn">
        Редактировать
      </NavLink>
      <button
        className="btn deleteBtn"
        onClick={removeUser.bind(null, user.id)}
      >
        &times;
      </button>
      <hr />
    </li>
  );
}

export default UserItem;
