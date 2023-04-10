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

const handleOpenLocation = () => {
  window.open('https://www.google.com/maps/place/Intocode+Coding+Bootcamp+%E2%80%93+%D1%88%D0%BA%D0%BE%D0%BB%D0%B0+%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F/@43.3243786,45.693057,18z/data=!4m6!3m5!1s0x4051d13abc103637:0x8601f7fff1cac51f!8m2!3d43.3248451!4d45.6923891!16s%2Fg%2F11h2gd700k');
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
      <div className={styles.marsh} onClick={handleOpenLocation}>
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
