import React from 'react'
import styles from './Futer.module.scss'
import google from '../../assets/img/google.png'
import instagram from '../../assets/img/instagram.png'
import invision from '../../assets/img/invision.png'
import logo from '../../assets/img/logotip.png'

function Futer() {
  return (
    <div className={styles.divFuter}>
        <div className={styles.divImg}>
           <a href="http://localhost:3000/"> <img src={google} alt="" /></a> 
           <a href=""><img src={instagram} alt="" /> </a> 
            <a href=""><img src={invision} alt="" /> </a> 
        </div>
        <div className={styles.divText1}> ООО «Дент», лицензия №ЛО-86-8681-01868686047 от 13.02.2009 <p>© 2018-2023 </p> </div>
        <div className={styles.divText2}> Политика в отношении обработки <p>персональных данных </p> </div>
        <div> <img src={logo} alt="" /></div>
    </div>
  )
}

export default Futer