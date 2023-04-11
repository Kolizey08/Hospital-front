import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./PersonalArea.module.scss";
import { getUserById, logOut, updateUser } from "../../redux/slices/userSlice";
import { fetchRecords } from "../../redux/slices/recordSlice";

const PersonalArea = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const records = useSelector((state) => state.record.records);
  const [needSeePassword, setNeedSeePassword] = React.useState(false);
  const [needChangeInfo, setNeedChangeInfo] = React.useState(false);

  React.useEffect(() => {
    dispatch(getUserById());
    dispatch(fetchRecords());
  }, [dispatch]);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const [login, setLogin] = React.useState(loggedUser?.login);
  const [firstname, setFirstname] = React.useState(loggedUser?.firstname);
  const [lastname, setLastname] = React.useState(loggedUser?.lastname);
  const [surname, setSurname] = React.useState(loggedUser?.surname);
  const [oms, setOms] = React.useState(loggedUser?.oms);
  const [phone, setPhone] = React.useState(loggedUser?.phone);
  const [password, setPassword] = React.useState(loggedUser?.password);

  if (!records || !loggedUser) {
    return "Loading...";
  }

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
    <div className={styles.personalArea}>
      <div className={styles.personalArea_wrapper}>
        <div className={styles.personalArea_bText}>Личный кабинет</div>
        <div className={styles.personalArea_row}>
          <div className={styles.personalArea_column}>
            <div className={styles.column_bText}>Ваши данные</div>
            <div className={styles.userInfo}>ФИО</div>
            <div className={styles.info}>
              {loggedUser.lastname} {loggedUser.firstname} {loggedUser.surname}
            </div>
            <div className={styles.userInfo}>Логин</div>
            <div className={styles.info}>{loggedUser.login}</div>
            <div className={styles.userInfo}>ОМС</div>
            <div className={styles.info}>{loggedUser.oms}</div>
            <div className={styles.userInfo}>Контактный номер</div>
            <div className={styles.info}>{loggedUser.phone}</div>
            <div className={styles.userInfo}>Пароль</div>
            <div className={styles.userPassword_row}>
              {needSeePassword ? (
                <div className={styles.userPassword}>{loggedUser.password}</div>
              ) : (
                <div className={styles.userPassword_dots}>
                  <div className={styles.userPassword_dot}></div>
                  <div className={styles.userPassword_dot}></div>
                  <div className={styles.userPassword_dot}></div>
                  <div className={styles.userPassword_dot}></div>
                </div>
              )}
              {needSeePassword ? (
                <div
                  className={styles.seePassword}
                  onClick={() => setNeedSeePassword(!needSeePassword)}
                >
                  скрыть
                </div>
              ) : (
                <div
                  className={styles.seePassword}
                  onClick={() => setNeedSeePassword(!needSeePassword)}
                >
                  показать
                </div>
              )}
            </div>
            <div
              className={styles.changeInfo}
              onClick={() => setNeedChangeInfo(true)}
            >
              Изменить данные
            </div>
            <div className={styles.logOut} onClick={() => handleLogOut()}>
              Выйти из аккаунта
            </div>
          </div>
          <div className={styles.personalArea_column}>
            <div className={styles.column_bText}>Ваши записи</div>
            <table className={styles.records}>
              <thead>
                <tr>
                  <td>Дата</td>
                  <td>Врач</td>
                  <td>Услуга</td>
                  <td>Статус</td>
                  <td>Цена</td>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => {
                  return (
                    <tr key={record._id}>
                      <td>
                        {`${record.date.substring(
                          8,
                          10
                        )}.${record.date.substring(
                          5,
                          7
                        )}.${record.date.substring(0, 4)} ${
                          Number(record.date.substring(11, 13)) + 3
                        }${record.date.substring(13, 16)}`}
                      </td>
                      <td>
                        {record.doctor.lastName} {record.doctor.firstName}{" "}
                        {record.doctor.surname}
                      </td>
                      <td style={{ maxWidth: "200px" }}>
                        {record.usluga.name}
                      </td>
                      <td>{record.status}</td>
                      <td>{record.usluga.price}₽</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {needChangeInfo && (
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
        )}
      </div>
    </div>
  );
};

export default PersonalArea;
