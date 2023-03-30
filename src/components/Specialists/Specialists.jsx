import React from "react";

import styles from "./Specialists.module.scss";
import specialist1 from "../../assets/img/specialist1.png";
import specialist2 from "../../assets/img/specialist2.png";

const Specialists = () => {
  return (
    <div className={styles.specialists}>
      <div className={styles.specialists_wrapper}>
        <div className={styles.specialists_bText}>Специалисты</div>
        <div className={styles.specialists_sText}>
          Просто и безболезненно, с предоставлением всего спектра
          стоматологических услуг
        </div>
        <div className={styles.specialists_row}>
          <div className={styles.specialist}>
            <div className={styles.specialist_row}>
              <div className={styles.specialist_info}>
                <div className={styles.specialist_name}>
                  Шац Дарья Сергеевна{" "}
                </div>
                <div className={styles.specialist_job}>
                  Директор, Главный врач , Врач ортодонт
                </div>
                <div className={styles.specialist_experience}>
                  Стаж работы 11 лет{" "}
                </div>
              </div>
              <div className={styles.specialist_image}>
                <img src={specialist1} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.specialist}>
            <div className={styles.specialist_row}>
              <div className={styles.specialist_info}>
                <div className={styles.specialist_name}>
                  Оленина Марина Николаевна
                </div>
                <div className={styles.specialist_job}>
                  Зам директора, Врач стоматолог терапевт
                </div>
                <div className={styles.specialist_experience}>
                  Стаж работы более 25 лет
                </div>
              </div>
              <div className={styles.specialist_image}>
                <img src={specialist1} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.specialist}>
            <div className={styles.specialist_row}>
              <div className={styles.specialist_info}>
                <div className={styles.specialist_name}>
                  Лыщиков Павел Анатольевич
                </div>
                <div className={styles.specialist_job}>
                  Врач стоматолог ортопед, хирург-имплантолог
                </div>
                <div className={styles.specialist_experience}>
                  Стаж работы более 15 лет
                </div>
              </div>
              <div className={styles.specialist_image}>
                <img src={specialist2} className={styles.sPhoto} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.specialist}>
            <div className={styles.specialist_row}>
              <div className={styles.specialist_info}>
                <div className={styles.specialist_name}>
                  Жирнов Дмитрий Александрович
                </div>
                <div className={styles.specialist_job}>
                  Врач стоматолог ортопед, хирург-имплантолог
                </div>
                <div className={styles.specialist_experience}>
                  Стаж более 10 лет
                </div>
              </div>
              <div className={styles.specialist_image}>
                <img src={specialist2} className={styles.sPhoto} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.specialist}>
            <div className={styles.specialist_row}>
              <div className={styles.specialist_info}>
                <div className={styles.specialist_name}>
                  Терушкина Елена Дмитриевна
                </div>
                <div className={styles.specialist_job}>
                  Врач стоматолог детский
                </div>
                <div className={styles.specialist_experience}>
                  Стаж работы более 10 лет
                </div>
              </div>
              <div className={styles.specialist_image}>
                <img src={specialist1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
