import React, { useState, useEffect } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

function EditUser({ users, saveUser }) {
  let { userId } = useParams();
  let history = useHistory();
  const curentUser = users.filter((user) => user.id === parseInt(userId));
  const [name, setName] = useState(curentUser[0].name);
  const [age, setAge] = useState(curentUser[0].age);
  const [phoneNumber, setPhoneNumber] = useState(curentUser[0].phoneNumber);
  const [country, setCountry] = useState(curentUser[0].country);
  const [email, setEmail] = useState(curentUser[0].email);

  useEffect(() => {
    M.AutoInit();
  }, []);

  function handlerClick() {
    const userSave = {
      id: parseInt(userId),
      name: name,
      age: age,
      phoneNumber: phoneNumber,
      country: country,
      email: email,
    };
    saveUser(userSave);
    history.push("/");
  }

  return (
    <>
      <h1>Редактировать данные пользовалеля</h1>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          className="validate"
        />
        <label className="active" htmlFor="name">
          Имя пользовалеля
        </label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          name="phoneNumber"
          className="validate"
        />
        <label className="active" htmlFor="phoneNumber">
          Номер телефона
        </label>
        <input
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          name="age"
          className="validate"
        />
        <label className="active" htmlFor="age">
          Возраст
        </label>

        <div>
          <label>
            <select
              name="country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              <option value="Russia">Russia</option>
              <option value="Australia">Australia</option>
              <option value="USA">USA</option>
            </select>
            Страна
          </label>
        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          className="validate"
        />
        <label className="active" htmlFor="email">
          Email
        </label>

        <pre>
          <button type="button" onClick={handlerClick} className="btn editBtn">
            Сохранить
          </button>
          <NavLink to="/" className="btn deleteBtn">
            Отмена
          </NavLink>
        </pre>
      </form>
    </>
  );
}
export default EditUser;
