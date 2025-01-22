"use client";

import SlideInLeft from "@/components/slideInLeft/SlideInLeft";
import styles from "./contact.module.css";
import PlanetScene from "@/components/planet/Planet";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_txl4rid", "template_e3zgdka", formRef.current, {
  //       publicKey: "yU4fF592Eepp46l1e",
  //     })
  //     .then(
  //       (result) => {
  //         setSuccess(true);
  //       },
  //       (error) => {
  //         setError(true);
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_txl4rid",
        "template_e3zgdka",
        {
          from_name: `${formData.name}`,
          from_email: formData.email,
          message: formData.message,
        },
        "yU4fF592Eepp46l1e"
      )
      .then(
        () => {
          setStatus("Message envoyé avec succès !");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        () => {
          setStatus("Une erreur est survenue. Veuillez réessayer.");
        }
      );
  };

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
            <form onSubmit={handleSubmit} className={styles.form}>
              <label htmlFor="name" className={styles.label}>
                Name :
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
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
                onChange={handleChange}
                value={formData.email}
              />
              <p className={styles.p}>Message :</p>
              <textarea
                name="message"
                required
                id=""
                placeholder="Bonjour, je vous contacte pour..."
                className={`${styles.input} ${styles.textarea}`}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button className={styles.button} type="submit">
                Send Message
              </button>
            </form>
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
