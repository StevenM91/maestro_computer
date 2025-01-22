import AnimatedTextBottomToTop from "../animatedTextBottomToTop/AnimatedTextBottomToTop";
import AnimatedTextRightToLeft from "../animatedTextRightToLeft/AnimatedTextRightToLeft";
import styles from "./cardAbout.module.css";

const CardAbout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.btn1}></div>
        <div className={styles.btn2}></div>
        <div className={styles.btn3}></div>
        <div className={styles.btn4}></div>
        <div className={styles.cardInt}>
          <div className={styles.info}>
            <AnimatedTextRightToLeft>
              <div className={styles.name}>
                <img
                  src="/moi.jpeg"
                  alt="photo profile about"
                  className={styles.img}
                />
                <div className={styles.nameContainer}>
                  <h2 className={styles.title}>Steven Maitre</h2>
                  <p className={styles.title}>Chartres (28)</p>
                </div>
              </div>
            </AnimatedTextRightToLeft>
            <AnimatedTextBottomToTop>
              <div className={styles.descContent}>
                <p className={styles.desc}>
                  Développeur web passionné depuis 2020, je suis constamment à
                  la recherche de nouvelles technologies et de défis à relever.
                  Autodidacte de nature, j'ai rapidement été séduit par la
                  flexibilité et la créativité qu'offre le développement web. Ma
                  formation FullStack chez Doranco m'a permis de consolider mes
                  bases et d'acquérir une méthodologie rigoureuse. Je suis
                  particulièrement attaché à JavaScript et React, langages que
                  je maîtrise parfaitement et qui me permettent de créer des
                  interfaces utilisateur dynamiques et réactives. Mon objectif
                  est de concevoir des applications web intuitives et
                  performantes, en accord avec les dernières tendances du
                  marché. En dehors de mes compétences techniques, je suis
                  également un fervent défenseur du travail en équipe et de la
                  collaboration. Je suis convaincu que le partage des
                  connaissances et l'entraide sont essentiels pour progresser et
                  innover.
                </p>
              </div>
            </AnimatedTextBottomToTop>
            {/* <span className={styles.hidden}>uiverse</span> */}
          </div>
        </div>
        <div className={styles.top}>
          <div className={styles.camera}>
            <div className={styles.int}></div>
          </div>
          <div className={styles.speaker}></div>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
