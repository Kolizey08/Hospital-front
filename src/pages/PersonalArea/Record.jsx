import React from "react";

import styles from "./PersonalArea.module.scss";
import { useDispatch } from "react-redux";
import { changeRecordStatus } from "../../redux/slices/recordSlice";

const Record = ({ record }) => {
  const dispatch = useDispatch();
  const [recordCancel, setRecordCancel] = React.useState(false);

  const handleOpendRecordCancel = () => {
    setRecordCancel(true);
    setTimeout(() => {
      setRecordCancel(false);
    }, 3000);
  };

  const handleCancelRecord = (id) => {
    dispatch(changeRecordStatus({ id, status: "Отменена" }));
    setRecordCancel(false);
  };
  return (
    <>
      <tr key={record._id}>
        <td>
          {`${record.date.substring(8, 10)}.${record.date.substring(
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
        <td style={{ maxWidth: "200px" }}>{record.usluga.name}</td>
        <td
          className={styles.record_status}
          onClick={() => {
            if (record.status !== "Отменена") {
              handleOpendRecordCancel();
            }
          }}
        >
          {record.status}
        </td>

        <td>{record.usluga.price}₽</td>
      </tr>
      {recordCancel && (
        <div className={styles.cancelModal}>
          <div className={styles.cancelModal_text}>Хотите отменить запись?</div>
          <div className={styles.cancelModal_buttonsRow}>
            <div
              className={styles.buttonAccept}
              onClick={() => handleCancelRecord(record._id)}
            >
              Да
            </div>
            <div
              className={styles.buttonCancel}
              onClick={() => setRecordCancel(false)}
            >
              Нет
            </div>
          </div>
          <div className={styles.cancel_timeLine}></div>
        </div>
      )}
    </>
  );
};

export default Record;
