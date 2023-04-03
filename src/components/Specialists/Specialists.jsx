import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Specialists.module.scss";
import { fetchSpecialists } from "../../redux/slices/specialistSlice";

const Specialists = () => {
  const dispatch = useDispatch();
  const specialists = useSelector((state) => state.specialist.specialists);

  React.useEffect(() => {
    dispatch(fetchSpecialists());
  }, [dispatch]);

  return (
    <div className={styles.specialists}>
      {specialists && (
        <div className={styles.specialists_wrapper}>
          <div className={styles.specialists_bText}>Специалисты</div>
          <div className={styles.specialists_sText}>
            Просто и безболезненно, с предоставлением всего спектра
            стоматологических услуг
          </div>
          <div className={styles.specialists_row}>
            {specialists.map((specialist) => {
              return (
                <div className={styles.specialist} key={specialist._id}>
                  <div className={styles.specialist_row}>
                    <div className={styles.specialist_info}>
                      <div className={styles.specialist_name}>
                        {specialist.firstName} {specialist.lastName}{" "}
                        {specialist.surname}
                      </div>
                      <div className={styles.specialist_job}>{specialist.speciality?.speciality}</div>
                      {specialist.experience && (
                        <div className={styles.specialist_experience}>
                          Стаж работы {specialist.experience} лет{" "}
                        </div>
                      )}
                    </div>
                    <div className={styles.specialist_image}>
                      <img
                        src={`http://localhost:4000/${specialist.image}`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Specialists;
