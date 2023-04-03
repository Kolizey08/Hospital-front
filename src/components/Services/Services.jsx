import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Services.module.scss";
import serviceArrow from "../../assets/img/serviceArrow.svg";
import { fetchCategories } from "../../redux/slices/categorySlice";
import { fetchService } from "../../redux/slices/serviceSlice";

const Services = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const service = useSelector((state) => state.service.service);
  const [choice, setChoice] = useState('')

  React.useEffect(() => {
    dispatch(fetchService());
    dispatch(fetchCategories());
  }, [dispatch]);
  
  const handleSetChoice = (id) => {
    setChoice(id)
  }

  return (
    <div className={styles.services}>
      <div className={styles.services_wrapper}>
        <div className={styles.services_bText}>Услуги </div>
        <div className={styles.services_sText}>
          Мы постарались сделать прайс, максимально простым и понятным.
        </div>
        <div className={styles.services_row} id={styles.services_row1}>
          {categories.slice(0, 5).map((category) => {
            return (
              <div className={styles.services_service} key={category._id} onClick={() => handleSetChoice(category._id)}>
                <div className={styles.service_img}>
                  <img src={`http://localhost:4000/${category.image}`} alt="" />
                </div>
                <div className={styles.service_text}>{category.name}</div>
                <div className={styles.service_hoverArrow}>
                  <img src={serviceArrow} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.services_choices}>
          {choice && service.filter((item) => item.category._id === choice).map((item) => {
            return (
              <div className={styles.services_choice} key={item._id}>
                <div className={styles.choice_text}>{item.name}</div>
                <div className={styles.choice_price}>{item.price}₽</div>
                <div className={styles.choice_button}>
                  {" "}
                  <button>Записаться</button>{" "}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.services_row} id={styles.services_row2}>
          {categories.slice(5).map((category) => {
            return (
              <div className={styles.services_service} key={category._id} onClick={() => handleSetChoice(category._id)}>
                <div className={styles.service_img}>
                  <img src={`http://localhost:4000/${category.image}`} alt="" />
                </div>
                <div className={styles.service_text}>{category.name}</div>
                <div className={styles.service_hoverArrow}>
                  <img src={serviceArrow} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
