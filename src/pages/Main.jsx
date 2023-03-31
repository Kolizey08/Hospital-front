import React from "react";
import BannerFeedback from "../components/BannerFeedback/BannerFeedback";
import Confidence from "../components/Confidence/Confidence";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Trealment from "../components/Trealment/Trealment";
import Specialists from "../components/Specialists/Specialists";

import styles from "./Main.module.scss";
import WindowFeedback from "../components/WindowFeedback/WindowFeedback";
import Futer from "../components/Futer/Futer";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_wrapper}>
        <Home />
        <Services />
        <Confidence />
        <BannerFeedback />
        <Trealment />
        <Specialists />
        <WindowFeedback />
        <Futer />
      </div>
    </div>
  );
};

export default Main;
