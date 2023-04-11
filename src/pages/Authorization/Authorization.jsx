import React, { useState } from "react";
import styles from "./Authorization.module.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authorization } from "../../redux/slices/userSlice";

function Authorization() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthorization = () => {
    dispatch(authorization({ login, password }));
    setLogin("");
    setPassword("");
  };

  return (
    <div className={styles.authorization}>
      <div className={styles.authorization_wrapper}>
        <div className={styles.authorization_form}>
          <div className={styles.authorization_bText}>Авторизация</div>
          <div className={styles.authorization_login}>
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Введите логин"
            />
          </div>
          <div className={styles.authorization_password}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />
          </div>
          <div className={styles.authorization_button}>
            <button onClick={handleAuthorization}>Войти в аккаунт</button>
          </div>
          <div className={styles.dontHaveAccauntText}>
            <Link to={"/registration"}>У меня нет аккаунта</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authorization;
