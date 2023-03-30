import React from "react";
import styles from "../Trealment/Trealment.module.scss";
import left from "../../assets/img/levo.png";
import right from "../../assets/img/pravo.png";
import pacient from "../../assets/img/pacient.png";
import logo1 from "../../assets/img/voxel.png";
import logo2 from "../../assets/img/log.png";
import logo3 from "../../assets/img/bus.png";

function Trealment() {
  return (
    <div>
      <div className={styles.divTextTitle}>
        <div className={styles.text1}>Лечение у нас</div>
        <div className={styles.text2}>
          Просто и безболезненно, с предоставлением
          <p> всего спектра стоматологических услуг</p>
        </div>
      </div>
      <div className={styles.divCointener2}>
        <div className={styles.divTextBlock}>
          <div className={styles.text3}> (Наш Логотип) клиника</div>
          <div className={styles.text4}>
            предоставляет весь спектр
            <p>стоматологических услуг таких как : </p>
          </div>
          <div className={styles.text5}>
            <div>Терапия</div>
            <div>Хирургия</div>
            <div>Ортодонтия</div>
            <div>Детская стомотология</div>
            <div>Ортопедия</div>
          </div>
          <div className={styles.text6}>
            Приоритетным направлением является восстановление
            <p>функциональных возможностей зубочелюстной системы</p>
            <p>и профилактика заболевания полости рта.</p>
          </div>
          <div className={styles.divCointenerLogo}>
            <div> <img src={logo1} alt="" /></div>
            <div> <img src={logo2} alt="" /></div>
            <div> <img src={logo3} alt="" /></div>
          </div>
        </div>
        <div>
          <div className={styles.divIconsCointener}>
            <div className={styles.divIcons}>
              <img src={left} alt="" />
            </div>
            <div className={styles.divIcons}>
              <img src={right} alt="" />
            </div>
          </div>
          <div>
            <img className={styles.imgPacient} src={pacient} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trealment;
