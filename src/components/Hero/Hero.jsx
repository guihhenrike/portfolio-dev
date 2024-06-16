import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Guilherme Lima</h1>
        <p className={styles.description}>
          Desenvolvedor Full Stack Júnior com experiência em Laravel, Javascript, MySQL e outros. 
          Entre em contato para saber mais! 
        </p>
        <a href="mailto:guilhermehenrique.devl@gmail.com" className={styles.contactBtn}>
          Contato
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
