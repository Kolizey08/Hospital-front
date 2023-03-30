import React from "react";

import styles from "./BannerFeedback.module.scss";
import bannerPhoto from "../../assets/img/feedbackBanner.png";

const BannerFeedback = () => {
  return (
    <div className={styles.bannerFeedback}>
      <div className={styles.bannerFeedback_wrapper}>
        <div className={styles.column_bText}>
          При фиксации брекетов на обе челюсти получи сертификат на 7000 рублей
        </div>
        <div className={styles.column_sText}>
          Укажите вой номер телефона, мы перезвоним и подберем для вас удобное
          время приёма. Или позвоните нам сами — <span>+7 900 333 10 40</span>
        </div>
        <div className={styles.feedbackForm_row}>
          <div className={styles.feedback_input}>
            <input type="text" placeholder="Телефон" />
          </div>
          <div className={styles.feedback_button}>
            <button>Записаться на прием</button>
          </div>
        </div>
        <div className={styles.column_warningText}>
          Записываясь на услугу вы даёте согласие на
          <span> обработку своих персональных данных</span>
        </div>
        <div className={styles.bannerPhoto}>
          <img src={bannerPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerFeedback;
