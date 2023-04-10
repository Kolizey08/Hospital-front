import React from 'react'
import styles from './WindowFeedback.module.scss'
import photo from '../../assets/img/windowfeedback.png'

function WindowFeedback() {
  const [phoneNumber, setPhoneNumber] = React.useState('')

  return (
    <div className={styles.windowFeedback}>
    <div className={styles.windowFeedback_wrapper}>
      <div className={styles.column_bText}>
      Онлайн консультация специалиста <p>по аудио и видео связи, Бесплатно. </p> 
      </div>
      <div className={styles.column_sText}>
        Укажите вой номер телефона, мы перезвоним и <p>подберем для вас удобное
        время для консультации.</p> <p>Или позвоните нам сами — <span>+7 900 333 10 40</span> </p> 
      </div>
      <div className={styles.feedbackForm_row}>
        <div className={styles.feedback_input}>
          <input type="text" placeholder="Телефон" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className={styles.feedback_button}>
          <button onClick={() => setPhoneNumber('')}>Записаться на консультацию</button>
        </div>
      </div>
      <div className={styles.column_warningText}>
        Записываясь на услугу вы даёте согласие на
        <span> обработку своих персональных данных</span>
      </div>
      <div className={styles.windowPhoto}>
        <img src={photo} alt="" />
      </div>
    </div>
  </div>
  )
}

export default WindowFeedback