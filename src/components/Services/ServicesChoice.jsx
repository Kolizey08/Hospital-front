import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Импорты datapicker'а
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./Services.module.scss";
import { recordToSpecialist } from "../../redux/slices/specialistSlice";
import { getServiceById } from "../../redux/slices/serviceSlice";

const ServicesChoice = ({ item, specialists }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = React.useState();
  const [openDatePicker, setOpenDatePicker] = React.useState(false);
  const serviceById = useSelector((state) => state.service.serviceById);

  const filterPassedTime = (time) => {
    const selectedDate = new Date(time);
    const currentSpecialist = specialists.find(
      (specialist) => specialist._id === serviceById?.doctor._id
    );
    const disabledTimes = currentSpecialist?.records.map(
      (record) =>
        record.usluga === item._id &&
        record.date
          .slice(0, record.date.length - 8)
          .replace("T", " ")
          .replace("Z", "")
    );
    return (
      selectedDate.getHours() > 8 &&
      selectedDate.getHours() < 19 &&
      !disabledTimes?.includes(
        selectedDate
          .toISOString()
          .slice(0, selectedDate.toISOString().length - 8)
          .replace("T", " ")
          .replace("Z", "")
      )
    );
  };

  const handleOpenPicker = (usluga, user, id) => {
    if (openDatePicker) {
      const date = startDate
        .toLocaleString("ru", {
          month: "numeric",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        })
        .replace(",", "")
        .replace(".", "-")
        .replace(".", "-");
      dispatch(recordToSpecialist({ date, usluga, user, id }));
      setOpenDatePicker(false);
      setStartDate("");
    } else {
      dispatch(getServiceById(usluga));
      setOpenDatePicker(true);
    }
  };
  return (
    <div className={styles.services_choice} key={item._id}>
      <div className={styles.choice_text}>{item.name}</div>
      <div className={styles.choice_price}>{item.price}₽</div>
      <div className={styles.choice_button}>
        {" "}
        <button
          onClick={() =>
            handleOpenPicker(
              item._id,
              "642d28eefbbb0572c257f92f",
              item.doctor._id
            )
          }
        >
          Записаться
        </button>{" "}
      </div>
      {openDatePicker && (
        <div className={styles.picker_row}>
          <DatePicker
            placeholderText="Выберите дату и время записи"
            selected={startDate}
            onChange={(data) => setStartDate(data)}
            locale={ru}
            showTimeSelect
            timeCaption="Время"
            timeIntervals={30}
            filterTime={filterPassedTime}
            minDate={new Date()}
            withPortal
            dateFormat={"dd-MM-yyyy HH:mm"}
          />
          <div
            className={styles.picker_close}
            onClick={() => setOpenDatePicker(!openDatePicker)}
          >
            x
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesChoice;
