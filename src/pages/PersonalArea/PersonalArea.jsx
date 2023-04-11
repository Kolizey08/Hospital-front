import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./PersonalArea.module.scss";
import { getUserById, logOut } from "../../redux/slices/userSlice";
import { fetchRecords } from "../../redux/slices/recordSlice";

const PersonalArea = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const records = useSelector((state) => state.record.records);
  const [needSeePassword, setNeedSeePassword] = React.useState(false);

  React.useEffect(() => {
    dispatch(getUserById());
    dispatch(fetchRecords());
  }, [dispatch]);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.personalArea}>
      <div className={styles.personalArea_wrapper}>
        <div className={styles.personalArea_bText}>Личный кабинет</div>
        <div className={styles.personalArea_row}>
          <div className={styles.personalArea_column}>
            <div className={styles.column_bText}>Ваши данные</div>
            <div className={styles.username}>{loggedUser?.username}</div>
            <div className={styles.userPhone}>{loggedUser?.phone}</div>
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
                        )}.${record.date.substring(
                          0,
                          4
                        )} ${record.date.substring(11, 16)}`}
                      </td>
                      <td>
                        {record.doctor?.lastName} {record.doctor?.firstName}{" "}
                        {record.doctor?.surname}
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
      </div>
    </div>
  );
};

export default PersonalArea;
