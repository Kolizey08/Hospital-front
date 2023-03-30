import React from "react";
import styles from "./Home.module.scss";
import doc from '../../assets/img/doctor.png'
import kreslo from '../../assets/img/Vector.png'
import mesto from '../../assets/img/Group.png'


function Home() {
  return (
    <div className={styles.divCointener}>
      <div className={styles.divCointenerText}>
        <div>
          <span className={styles.text1}>- Стоматология в Грозном</span>
        </div>
        <div>
          <span className={styles.text2}>Лечение зубов в тот же день</span>
        </div>
        <div>
          <span className={styles.text3}>
            Мы проведем полную консультацию, профессиональную гигиену полости
            рта, лечение зубов и десен
          </span>
        </div>
        <div>
          <button className={styles.btn}>Записаться на прием</button>
        </div>
      </div>
      <div className={styles.divCointenerIconsText}>
        <div className={styles.divIcons1}> <div><img src={doc} alt="" /> </div> <div className={styles.iconsText}>Команда квалифицированных <p> специалистов</p>  </div></div>
        <div className={styles.divIcons2}> <div> <img src={kreslo} alt="" /></div> <div className={styles.iconsText}>3 стоматологических <p>кабинета</p> </div> </div>
        <div className={styles.divIcons3}> <div> <img src={mesto} alt="" /></div> <div className={styles.iconsText}>Удобное <p>расположение</p>  </div></div>
      </div>
    </div>
  );
}

export default Home;
