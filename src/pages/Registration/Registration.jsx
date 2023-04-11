import React, { useState } from "react";
import styles from "./Registration.module.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registration } from "../../redux/slices/userSlice";

function Registration() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [surname, setSurname] = useState("");
  const [oms, setOms] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    dispatch(
      registration({
        login,
        phone,
        password,
        firstname,
        lastname,
        surname,
        oms,
      })
    );
    setLogin("");
    setPhone("");
    setPassword("");
  };

  const handleDisabled = () => {
    if (!login || !phone || !password) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={styles.registration}>
      <div className={styles.registration_wrapper}>
        <div className={styles.registration_form}>
          <div className={styles.registration_bText}>Регистрация</div>
          <div className={styles.registration_login}>
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Введите логин"
            />
          </div>
          <div className={styles.registration_firstLastNameRow}>
            <div className={styles.registration_firstName}>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Введите имя"
              />
            </div>
            <div className={styles.registration_lastName}>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Введите фамилию"
              />
            </div>
          </div>
          <div className={styles.registration_lastName}>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Введите отчество"
            />
          </div>
          <div className={styles.registration_oms}>
            <input
              type="text"
              value={oms}
              onChange={(e) => setOms(e.target.value)}
              placeholder="Введите ОМС"
            />
          </div>
          <div className={styles.registration_login}>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Введите номер телефона"
            />
          </div>
          <div className={styles.registration_password}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />
          </div>
          <div className={styles.registrationButton}>
            <Link to={"/authorization"}>
              <button onClick={handleRegistration} disabled={handleDisabled()}>
                Зарегистрироваться
              </button>
            </Link>
          </div>
          <div className={styles.hasAccauntText}>
            <Link to={"/authorization"}>У меня есть аккаунт</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
