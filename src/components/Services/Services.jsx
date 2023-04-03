import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Services.module.scss";
import serviceArrow from "../../assets/img/serviceArrow.svg";
import { fetchCategories } from "../../redux/slices/categorySlice";

const Services = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
          <div className={styles.services_choice}>
            <div className={styles.choice_text}>Световая пломба</div>
            <div className={styles.choice_price}>3 800 ₽</div>
            <div className={styles.choice_button}>
              <button>Записаться</button>
            </div>
          </div>
          <div className={styles.services_choice}>
            <div className={styles.choice_text}>Лечение кариеса</div>
            <div className={styles.choice_price}>3 800 ₽</div>
            <div className={styles.choice_button}>
              <button>Записаться</button>
            </div>
          </div>
          <div className={styles.services_choice}>
            <div className={styles.choice_text}>Лечение пульпита</div>
            <div className={styles.choice_price}>6 000 ₽</div>
            <div className={styles.choice_button}>
              <button>Записаться</button>
            </div>
          </div>
          <div className={styles.services_choice}>
            <div className={styles.choice_text}>Лечение кисты</div>
            <div className={styles.choice_price}>4 450 ₽</div>
            <div className={styles.choice_button}>
              <button>Записаться</button>
            </div>
          </div>
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
