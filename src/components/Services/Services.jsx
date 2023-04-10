import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Services.module.scss";
import serviceArrow from "../../assets/img/serviceArrow.svg";
import bracesWhite from "../../assets/img/bracesWhite.svg";
import childDentWhite from "../../assets/img/childDentWhite.svg";
import crownsWhite from "../../assets/img/crownsWhite.svg";
import dentalTreatmentWhite from "../../assets/img/dentalTreatmentWhite.svg";
import hygieneWhite from "../../assets/img/hygieneWhite.svg";
import implantsWhite from "../../assets/img/implantsWhite.svg";
import surgeryWhite from "../../assets/img/surgeryWhite.svg";
import veneersWhite from "../../assets/img/veneersWhite.svg";
import { fetchCategories } from "../../redux/slices/categorySlice";
import { fetchService, setOpentChoiceForm } from "../../redux/slices/serviceSlice";
import ServicesChoice from "./ServicesChoice";
import { fetchSpecialists } from "../../redux/slices/specialistSlice";

const images = [
  dentalTreatmentWhite,
  hygieneWhite,
  bracesWhite,
  childDentWhite,
  implantsWhite,
  veneersWhite,
  crownsWhite,
  surgeryWhite,
];

const Services = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const service = useSelector((state) => state.service.service);
  const specialists = useSelector((state) => state.specialist.specialists);
  const token = useSelector((state) => state.user.token);
  const [choice, setChoice] = useState("");

  React.useEffect(() => {
    dispatch(fetchService());
    dispatch(fetchSpecialists());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSetChoice = (id) => {
    setChoice(id);
    dispatch(setOpentChoiceForm(true))
    if (choice === id) {
      dispatch(setOpentChoiceForm(false))
      setChoice(null);
    }
  };

  return (
    <div className={styles.services}>
      <div className={styles.services_wrapper}>
        <div className={styles.services_bText}>Услуги </div>
        <div className={styles.services_sText}>
          Мы постарались сделать прайс, максимально простым и понятным.
        </div>
        <div className={styles.services_row} id={styles.services_row1}>
          {categories.slice(0, 5).map((category, index) => {
            const neededImage = category.image
              .replace("Blue", "White")
              .slice(0, category.image.length - 3);
            const findedImage = images[index].slice(
              14,
              images[index].indexOf(".", 2)
            );
            return (
              <div
                className={styles.services_service}
                id={choice === category._id ? `${styles.active}` : null}
                key={category._id}
                onClick={() => handleSetChoice(category._id)}
              >
                <div className={styles.service_img}>
                  {choice === category._id ? (
                    <img
                      src={neededImage === findedImage ? images[index] : null}
                    />
                  ) : (
                    <img
                      src={`http://localhost:4000/${category.image}`}
                      alt=""
                    />
                  )}
                </div>
                <div className={styles.service_text}>{category.name}</div>
                <div className={styles.service_hoverArrow}>
                  <img src={serviceArrow} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.services_choices}>
          {choice &&
            service
              .filter((item) => item.category._id === choice)
              .map((item) => {
                return (
                  <ServicesChoice
                    item={item}
                    key={item._id}
                    specialists={specialists}
                    token={token}
                  />
                );
              })}
        </div>
        <div className={styles.services_row} id={styles.services_row2}>
          {categories.slice(5).map((category, index) => {
            const neededImage = category.image
              .replace("Blue", "White")
              .slice(0, category.image.length - 3);
            const findedImage = images[index + 5].slice(
              14,
              images[index + 5].indexOf(".", 2)
            );
            return (
              <div
                className={styles.services_service}
                key={category._id}
                id={choice === category._id ? `${styles.active}` : ""}
                onClick={() => handleSetChoice(category._id)}
              >
                <div className={styles.service_img}>
                  {choice === category._id ? (
                    <img
                      src={
                        neededImage === findedImage ? images[index + 5] : null
                      }
                    />
                  ) : (
                    <img
                      src={`http://localhost:4000/${category.image}`}
                      alt=""
                    />
                  )}
                </div>
                <div className={styles.service_text}>{category.name}</div>
                <div className={styles.service_hoverArrow}>
                  <img src={serviceArrow} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
