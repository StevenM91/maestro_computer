"use client";

import SlideInLeft from "@/components/slideInLeft/SlideInLeft";
import styles from "./contact.module.css";
import PlanetScene from "@/components/planet/Planet";

const Contact = () => {
  return (
    <div className={styles.container}>
      <SlideInLeft>
        <h1 className={styles.title}>Demandez tout ce que vous avez en tête</h1>
        <h3 className={styles.subtitle}>
          Vous avez des questions ou besoin d'aide ? Remplissez le formulaire{" "}
          <br />
          ci-dessous et je répondrai dans les plus brefs délais.
        </h3>
      </SlideInLeft>
      <div className={styles.partLeft}>
        <div className={`${styles.formContainer} ${styles.field}`}>
          <SlideInLeft>
            <label htmlFor="name" className={styles.label}>
              Name :
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="John Doe"
              className={styles.input}
            />
            <label htmlFor="phone" className={styles.label}>
              Email :
            </label>
            <input
              type="email"
              placeholder="contact@gmail.com"
              required
              name="email"
              className={styles.input}
            />
            <p className={styles.p}>Message :</p>
            <textarea
              name=""
              id=""
              placeholder="Bonjour, je vous contacte pour..."
              className={`${styles.input} ${styles.textarea}`}
            ></textarea>
            <button className={styles.button}>Send Message</button>
          </SlideInLeft>
          <div className={styles.partRight}>
            <div className={styles.planet}>
              <PlanetScene />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
