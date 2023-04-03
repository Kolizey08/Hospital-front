import React from "react";

import styles from "./Services.module.scss";
import serviceArrow from "../../assets/img/serviceArrow.svg";

const Services = () => {
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
              <div className={styles.services_service} key={category._id}>
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
          {service.map((item) => {
            return (
              <div className={styles.services_choice}>
              <div className={styles.choice_text}>{item.name}</div>
              <div className={styles.choice_price}>{item.price}₽</div>
              <div className={styles.choice_button}> <button>Записаться</button> </div>
              </div>
            )
          })}
        </div>
        <div className={styles.services_row} id={styles.services_row2}>
          {categories.slice(5).map((category) => {
            return (
              <div className={styles.services_service} key={category._id}>
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
