import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./PersonalArea.module.scss";
import { getUserById, logOut } from "../../redux/slices/userSlice";
import { fetchRecords } from "../../redux/slices/recordSlice";
import PersonalAreaModal from "./PersonalAreaModal";
import Record from "./Record";

const PersonalArea = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const records = useSelector((state) => state.record.records).filter(
    (record) => record.user === loggedUser?._id
  );
  const [needSeePassword, setNeedSeePassword] = React.useState(false);
  const [needChangeInfo, setNeedChangeInfo] = React.useState(false);

  React.useEffect(() => {
    dispatch(getUserById());
    dispatch(fetchRecords());
  }, [dispatch]);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  if (!records || !loggedUser) {
    return "Loading...";
  }
  return (
    <div className={styles.personalArea}>
      <div className={styles.personalArea_wrapper}>
        <div className={styles.personalArea_bText}>
          Личный кабинет пользователя
        </div>
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
                  return <Record record={record} key={record._id} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
        {needChangeInfo && (
          <PersonalAreaModal
            loggedUser={loggedUser}
            setNeedChangeInfo={setNeedChangeInfo}
          />
        )}
      </div>
    </div>
  );
};

export default PersonalArea;
