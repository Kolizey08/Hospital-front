import React from "react";
import Confidence from "../components/Confidence/Confidence";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_wrapper}>
        <Home />
        <Services />
        <Confidence />
      </div>
    </div>
  );
};

export default Main;
