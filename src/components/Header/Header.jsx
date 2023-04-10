import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logotip.png";
import marshrut from "../../assets/img/marshrut.png";
import calendar from "../../assets/img/calendar.png";
import logophone from "../../assets/img/phone.png";
import vhod from "../../assets/img/vhod.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const isChoiceOpen = useSelector((state) => state.service.serviceChoiceOpen);

  const hadleScroller = (px) => {
    window.scrollTo({
      top: px,
      behavior: "smooth",
    });
  };

  const handleOpenLocation = () => {
    window.open(
      "https://www.google.com/maps/place/%D0%A6%D0%B5%D0%BD%D1%82%D1%80+%D1%81%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9+%D0%B8%D0%BC%D0%BF%D0%BB%D0%B0%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D0%B8+%22%D0%91%D0%95%D0%A0%D0%A1%22/@43.3240432,45.6923724,17z/data=!3m1!4b1!4m6!3m5!1s0x4051d1c7b609b85b:0x53e32b9caaeaa563!8m2!3d43.3240432!4d45.6945611!16s%2Fg%2F11f50x4f66"
    );
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.vkladki}>
        <p className={styles.onas} onClick={() => hadleScroller(0)}>
          О нас
        </p>
        <p className={styles.uslugi} onClick={() => hadleScroller(700)}>
          Услуги
        </p>
        <p className={styles.spec} onClick={() => hadleScroller(isChoiceOpen ? 4230 : 3920)}>
          Специалисты
        </p>
        <p className={styles.pacient} onClick={() => hadleScroller(isChoiceOpen ? 3320 : 3020)}>
          Пациентам
        </p>
        <p className={styles.contacts} onClick={() => hadleScroller(isChoiceOpen ? 6800 : 6500)}>
          Контакты
        </p>
      </div>
      <div className={styles.marsh} onClick={handleOpenLocation}>
        <img className={styles.imgmarsh} src={marshrut} alt="" />
        <div className={styles.adres}>
          Грозный, <br />
          Шейха-Али Митаева 31А
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
      <Link to={"/authorization"}>
        <img className={styles.voyti} src={vhod} alt="" />
      </Link>
    </div>
  );
};

export default Header;
