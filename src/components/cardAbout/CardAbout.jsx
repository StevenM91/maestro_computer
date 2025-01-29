"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import AnimatedTextBottomToTop from "../animatedTextBottomToTop/AnimatedTextBottomToTop";
import AnimatedTextRightToLeft from "../animatedTextRightToLeft/AnimatedTextRightToLeft";
import styles from "./cardAbout.module.css";

const CardAbout = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.btn1}></div>
        <div className={styles.btn2}></div>
        <div className={styles.btn3}></div>
        <div className={styles.btn4}></div>
        <div className={styles.cardInt}>
          <div className={styles.info}>
            <div>
              <AnimatedTextRightToLeft>
                <div className={styles.name}>
                  <img
                    src="/moi.jpeg"
                    alt="photo profile about"
                    className={styles.img}
                  />
                  <div className={styles.nameContainer}>
                    <h2 className={styles.title}>Steven Maitre</h2>
                  </div>
                </div>
              </AnimatedTextRightToLeft>
              <AnimatedTextBottomToTop>
                <div className={styles.descContent}>
                  <p className={styles.desc}>
                    Développeur web passionné depuis 2020, je suis constamment à
                    la recherche de nouvelles technologies et de défis à
                    relever. Autodidacte de nature, j'ai rapidement été séduit
                    par la flexibilité et la créativité qu'offre le
                    développement web. Ma formation FullStack chez Doranco m'a
                    permis de consolider mes bases et d'acquérir une
                    méthodologie rigoureuse. Je suis particulièrement attaché à
                    JavaScript et React, langages que je maîtrise parfaitement
                    et qui me permettent de créer des interfaces utilisateur
                    dynamiques et réactives. Mon objectif est de concevoir des
                    applications web intuitives et performantes, en accord avec
                    les dernières tendances du marché. En dehors de mes
                    compétences techniques, je suis également un fervent
                    défenseur du travail en équipe et de la collaboration. Je
                    suis convaincu que le partage des connaissances et
                    l'entraide sont essentiels pour progresser et innover.
                  </p>
                </div>
              </AnimatedTextBottomToTop>
            </div>
            {/* <span className={styles.hidden}>uiverse</span> */}
            <div className={styles.partRight}>
              <div className={styles.skills}>
                <AnimatedTextRightToLeft>
                  <h1 className={styles.titleSkills}>Skills</h1>
                </AnimatedTextRightToLeft>
                <div className={styles.frontEnd}>
                  <AnimatedTextRightToLeft>
                    <h3 className={styles.titleLang}>Front-End :</h3>
                  </AnimatedTextRightToLeft>
                  <AnimatedTextBottomToTop>
                    <div className={styles.titleLangContainer}>
                      <div className={styles.langLeft}>
                        <img
                          src="/colorAbout/html.png"
                          alt=""
                          className={styles.imgLang}
                        />{" "}
                        <p className={styles.lang}>HTML 5</p>
                      </div>
                      <div className={styles.langRight}>
                        <img
                          src="/colorAbout/cssc.png"
                          alt=""
                          className={styles.imgLang}
                        />
                        <p className={styles.lang}>CSS</p>
                      </div>
                    </div>
                    <div className={styles.titleLangContainer}>
                      <div className={styles.langLeft}>
                        <img
                          src="/colorAbout/sassc.png"
                          alt=""
                          className={styles.imgLang}
                        />{" "}
                        <p className={styles.lang}>SASS</p>
                      </div>
                      <div className={styles.langRight}>
                        <img
                          src="/colorAbout/reactc.png"
                          alt=""
                          className={styles.imgLang}
                        />
                        <p className={styles.lang}>React JS</p>
                      </div>
                    </div>
                    <div className={styles.titleLangContainer}>
                      <div className={styles.langLeft}>
                        <img
                          src="/colorAbout/redux.png"
                          alt=""
                          className={styles.imgLang}
                        />{" "}
                        <p className={styles.lang}>Redux</p>
                      </div>
                      <div className={styles.langRight}>
                        <img
                          src="/colorAbout/redux.png"
                          alt=""
                          className={styles.imgLang}
                        />
                        <p className={styles.lang}>Redux ToolKit</p>
                      </div>
                    </div>
                  </AnimatedTextBottomToTop>
                  <AnimatedTextRightToLeft>
                    <h3 className={styles.titleLang}>Back-End :</h3>
                  </AnimatedTextRightToLeft>
                  <AnimatedTextBottomToTop>
                    <div className={styles.titleLangContainer}>
                      <div className={styles.langLeft}>
                        <img
                          src="/colorAbout/node.png"
                          alt=""
                          className={styles.imgLang}
                        />{" "}
                        <p className={styles.lang}>Node JS</p>
                      </div>
                      <div className={styles.langRight}>
                        <img
                          src="/colorAbout/symfony.png"
                          alt=""
                          className={styles.imgLang}
                        />
                        <p className={styles.lang}>Symfony</p>
                      </div>
                    </div>
                    <div className={styles.titleLangContainer}>
                      <div className={styles.langLeft}>
                        <img
                          src="/colorAbout/nextx.png"
                          alt=""
                          className={styles.imgLang}
                        />{" "}
                        <p className={styles.lang}>Next JS</p>
                      </div>
                      <div className={styles.langRight}>
                        <img
                          src="/colorAbout/mongo.png"
                          alt=""
                          className={styles.imgLang}
                        />
                        <p className={styles.lang}>Mongo DB</p>
                      </div>
                    </div>
                    <div className={styles.titleLangContainer}>
                      <div className={styles.langLeft}>
                        <img
                          src="/colorAbout/mysql.png"
                          alt=""
                          className={styles.imgLang}
                        />{" "}
                        <p className={styles.lang}>My SQL</p>
                      </div>
                    </div>
                  </AnimatedTextBottomToTop>
                  <AnimatedTextRightToLeft>
                    <h3 className={styles.titleLang}>Librairies :</h3>
                  </AnimatedTextRightToLeft>
                  <AnimatedTextBottomToTop>
                    <div className={styles.titleLangContainer}>
                      <div className={styles.langLeft}>
                        <img
                          src="/colorAbout/ThreeJS.png"
                          alt=""
                          className={styles.imgLang}
                        />{" "}
                        <p className={styles.lang}>THREE JS</p>
                      </div>
                      <div className={styles.langRight}>
                        <img
                          src="/colorAbout/prisma.png"
                          alt=""
                          className={styles.imgLang}
                        />
                        <p className={styles.lang}>Prisma</p>
                      </div>
                    </div>{" "}
                    <div className={styles.titleLangContainer}>
                      <div className={styles.langLeft}>
                        <img
                          src="/colorAbout/socket.png"
                          alt=""
                          className={styles.imgLang}
                        />{" "}
                        <p className={styles.lang}>Socket IO</p>
                      </div>
                      <div className={styles.langRight}>
                        <img
                          src="/colorAbout/js.png"
                          alt=""
                          className={styles.imgLang}
                        />
                        <p className={styles.lang}>Multiple librairie JS</p>
                      </div>
                    </div>{" "}
                  </AnimatedTextBottomToTop>
                </div>
              </div>
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
    </div>
  );
};

export default CardAbout;
