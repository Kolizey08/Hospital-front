import React from "react";

import styles from "./Confidence.module.scss";

const Confidence = () => {
  return (
    <div className={styles.confidence}>
      <div className={styles.confidence_wrapper}>
        <div className={styles.confidence_bText}>Нам доверяют пациенты</div>
        <div className={styles.confidence_row}>
          <div className={styles.confidence_column}>
            <div className={styles.column_number}>1</div>
            <div className={styles.column_bText}>
              Честные цены, без хитрых уловок
            </div>
            <div className={styles.column_sText}>
              Фиксируем цены в плане лечения, не повышаем в процессе.
            </div>
          </div>
          <div className={styles.confidence_column}>
            <div className={styles.column_number}>2</div>
            <div className={styles.column_bText}>Опытные Врачи</div>
            <div className={styles.column_sText}>
              Врачи постоянно совершенствуются в своей специальности, несмотря
              на богатый опыт работы.
            </div>
          </div>
          <div className={styles.confidence_column}>
            <div className={styles.column_number}>3</div>
            <div className={styles.column_bText}>Комфортные условия</div>
            <div className={styles.column_sText}>
              Уютная обстановка и отзывчивый персонал сделают поход к
              стоматологу максимально приятным.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confidence;
