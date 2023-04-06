import React, { useState } from "react";
import styles from "./Registration.module.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registration } from "../../redux/slices/userSlice";

function Registration() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    dispatch(registration({ username, phone, password }));
    setUsername("");
    setPhone("");
    setPassword("");
  };

  const handleDisabled = () => {
    if (!username || !phone || !password) {
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите имя пользователя"
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
            <Link to={'/authorization'}>
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
