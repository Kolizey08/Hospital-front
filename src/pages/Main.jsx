import React from "react";
import Achievements from "../components/Achievements/Achievements";
import BannerFeedback from "../components/BannerFeedback/BannerFeedback";
import Confidence from "../components/Confidence/Confidence";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Specialists from "../components/Specialists/Specialists";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_wrapper}>
        <Header />
        <Home />
        <Services />
        <Confidence />
        <BannerFeedback />
        <Specialists />
        <Achievements />
      </div>
    </div>
  );
};

export default Main;
