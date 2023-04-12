import React from "react";

import styles from "./PersonalArea.module.scss";
import { updateUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const PersonalAreaModal = ({ loggedUser, setNeedChangeInfo }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = React.useState(loggedUser?.login);
  const [firstname, setFirstname] = React.useState(loggedUser?.firstname);
  const [lastname, setLastname] = React.useState(loggedUser?.lastname);
  const [surname, setSurname] = React.useState(loggedUser?.surname);
  const [oms, setOms] = React.useState(loggedUser?.oms);
  const [phone, setPhone] = React.useState(loggedUser?.phone);
  const [password, setPassword] = React.useState(loggedUser?.password);

  const handleChangeInfo = () => {
    dispatch(
      updateUser({
        id: loggedUser._id,
        firstname,
        lastname,
        surname,
        oms,
        phone,
        password,
      })
    );
    setNeedChangeInfo(false);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modal_form}>
        <div className={styles.modal_inputForm}>
          Логин
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Введите логин"
          />
        </div>
        <div className={styles.modal_firstLastNameRow}>
          <div className={styles.modal_inputForm}>
            Имя
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Введите имя"
            />
          </div>
          <div className={styles.modal_inputForm}>
            Фамилия
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Введите фамилию"
            />
          </div>
        </div>
        <div className={styles.modal_inputForm}>
          Отчество
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Введите отчество"
          />
        </div>
        <div className={styles.modal_inputForm}>
          ОМС
          <input
            type="text"
            value={oms}
            onChange={(e) => setOms(e.target.value)}
            placeholder="Введите ОМС"
          />
        </div>
        <div className={styles.modal_inputForm}>
          Контактный номер
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Введите номер телефона"
          />
        </div>
        <div className={styles.modal_inputForm}>
          Пароль
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите пароль"
          />
        </div>
        <div className={styles.modalButton}>
          <button onClick={handleChangeInfo}>Изменить</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalAreaModal;
