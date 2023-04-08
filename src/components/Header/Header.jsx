import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logotip.png";
import marshrut from "../../assets/img/marshrut.png";
import calendar from "../../assets/img/calendar.png";
import logophone from "../../assets/img/phone.png";
import vhod from "../../assets/img/vhod.png";
import { Link } from "react-router-dom";

const Header = () => {

const hadleScroller = (px) => {
window.scrollTo({
  top: px,
  behavior: "smooth"
})

}

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.vkladki}>
        <p className={styles.onas} onClick={() => hadleScroller(0)}>
          О нас
        </p>
        <p className={styles.uslugi} onClick={() => hadleScroller(800)}>
          Услуги
        </p>
        <p className={styles.spec} onClick={() => hadleScroller(3920)}>
          Специалисты
        </p>
        <p className={styles.pacient} onClick={() => hadleScroller(3100)}>
          Пациентам
        </p>
        <p className={styles.contacts} onClick={() => hadleScroller(6600)}>
          Контакты
        </p>
      </div>
      <div className={styles.marsh}>
        <img className={styles.imgmarsh} src={marshrut} alt="" />
        <div className={styles.adres}>
          Грозный, <br />
          Шейха-Али Митаева 1
        </div>
      </div>
      <div className={styles.raspis}>
        <div className={styles.calendar}>
          <img className={styles.calen} src={calendar} alt="" />
        </div>
        <div className={styles.time}>с 09:00 - 20:00</div>
        <div className={styles.dni}>пн-сб</div>
      </div>
      <div className={styles.telefon}>
        <div className={styles.logophone}>
          <img src={logophone} alt="" />
        </div>
        <div className={styles.phone}>+7900 333 10 40</div>
      </div>
      <Link to={'/authorization'} >
       <img className={styles.voyti} src={vhod} alt="" />
      </Link>
    </div>
  );
}

export default Header;
