import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Импорты datapicker'а
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./Services.module.scss";
import {
  getServiceById,
  setOpenSeviceMessage,
} from "../../redux/slices/serviceSlice";
import {
  fetchRecords,
  recordToSpecialist,
} from "../../redux/slices/recordSlice";
import { getUserById } from "../../redux/slices/userSlice";

const ServicesChoice = ({ item, token }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = React.useState();
  const [openDatePicker, setOpenDatePicker] = React.useState(false);
  const openMessage = useSelector((state) => state.service.serviceMessage);
  const records = useSelector((state) => state.record.records);
  const loggedUser = useSelector((state) => state.user.loggedUser);

  React.useEffect(() => {
    dispatch(fetchRecords());
    dispatch(getUserById());
  }, [dispatch]);

  const filterPassedTime = (time) => {
    const selectedDate = new Date(time);
    const disabledTimes = records.map(
      (record) =>
        record.usluga === item._id &&
        record.date
          .slice(0, record.date.length - 8)
          .replace("T", " ")
          .replace("Z", "")
    );
    return (
      selectedDate.getHours() > 8 &&
      selectedDate.getHours() < 20 &&
      !disabledTimes?.includes(
        selectedDate
          .toISOString()
          .slice(0, selectedDate.toISOString().length - 8)
          .replace("T", " ")
          .replace("Z", "")
      )
    );
  };

  const handleOpenPicker = (usluga) => {
    setOpenDatePicker(true);
    dispatch(getServiceById(usluga));
  };

  const handleMessageOpen = () => {
    if (!openMessage) {
      dispatch(setOpenSeviceMessage(true));
      setTimeout(() => {
        dispatch(setOpenSeviceMessage(false));
      }, 2950);
    }
  };
  const handleRecord = (usluga, user, doctor) => {
    const date = startDate.toISOString();
    // .toLocaleString("ru", {
    //   month: "numeric",
    //   day: "numeric",
    //   year: "numeric",
    //   hour: "numeric",
    //   minute: "numeric",
    //   timeZone: 'long'
    // })
    // .replace(",", "")
    dispatch(recordToSpecialist({ date, usluga, user, doctor }));
    setOpenDatePicker(false);
    setStartDate("");
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0;
  };
  return (
    <div className={styles.services_choice} key={item._id}>
      {openMessage && (
        <div className={styles.messageForm}>
          <div className={styles.messageText}>
            Для онлайн записи нужно авторизоваться!
          </div>
          <div className={styles.message_timeLine}></div>
        </div>
      )}
      <div className={styles.choice_text}>{item.name}</div>
      <div className={styles.choice_price}>{item.price}₽</div>
      <div className={styles.choice_button}>
        {token ? (
          <button onClick={() => handleOpenPicker(item._id)}>Записаться</button>
        ) : (
          <button onClick={() => handleMessageOpen()}>Записаться</button>
        )}
      </div>
      {openDatePicker && (
        <div className={styles.datePicker}>
          <DatePicker
            placeholderText="Выберите дату и время записи"
            selected={startDate}
            onChange={(data) => setStartDate(data)}
            locale={ru}
            showTimeSelect
            timeCaption="Время"
            timeIntervals={30}
            filterTime={filterPassedTime}
            filterDate={isWeekday}
            minDate={new Date()}
            inline
            dateFormat={"dd-MM-yyyy HH:mm"}
          >
            <div className={styles.choice_button} style={{ marginLeft: 20 }}>
              <button
                onClick={() =>
                  handleRecord(item._id, loggedUser._id, item.doctor._id)
                }
                disabled={!startDate || startDate?.toString()[16] === "0"}
              >
                Записаться
              </button>
            </div>
          </DatePicker>
        </div>
      )}
    </div>
  );
};

export default ServicesChoice;
