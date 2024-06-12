import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import {
  servicesSliderProps,
  testimonialsSliderProps,
} from "../src/sliderProps";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Bonjour, <b>mon nom est</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Tracy</b> Bachmann{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    Je suis <strong>développeuse web fullstack</strong>
                  </div>
                  <div className="label lui-subtitle">
                    {" "}
                    Je cherche un emploi de <strong>consultante Microsoft Power Platform</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                    Passionnée par le numérique depuis toujours, j'ai entrepris une reconversion professionnelle dans ce domaine. Après une formation intensive
                    en développement web, je suis désormais prête à mettre mes compétences au service de vos projets. Toujours enthousiaste à l'idée d'apprendre
                    et de progresser, je suis motivée par les défis et disponible pour collaborer sur des projets innovants et stimulants.
                    </p>
                  </div>
                  <div className="social-links">
                    <a target="_blank" rel="nofollow" href="https://github.com/TracyBachmann">
                      <i aria-hidden="true" className="fab fa-github" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://fr.linkedin.com/in/trbach">
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://leetcode.com/u/Tracy_Bachmann/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" style={{ width: '24px', height: '24px' }} />
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/14bhZuN9MT79pgivsigmvFP48tILi9HiX/view?usp=sharing"
                    className="btn"
                  >
                    <span>Télécharger mon CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    Mes compétences{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  decoding="async"
                  src="assets/images/femme3.png"
                  alt="<b>Tracy</b> Bachmann"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        6+ <strong>+</strong>
                      </span>
                      <span className="value">
                        <strong>Langages</strong> maîtrisés
                      </span>
                    </li>
                    <li>
                      <span className="num">10+</span>
                      <span className="value">
                        <strong>Projets</strong> réalisés
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Développeuse web </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom"
        id="services-section"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Ce que je fais... </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  mes <b>services</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper
              {...servicesSliderProps}
              className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Conception &amp; Planification </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Gestion de projet et analyse </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      Réalisation des documents de planification avant le développement, 
                      pour assurer une communication claire entre les parties prenantes 
                      et définir précisément les besoins et objectifs du projet.{" "}
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    En savoir plus{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>

              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Conception &amp; Planification </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Design et maquettage </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                      Réalisation de logos, chartes graphiques, wireframes, maquettes et prototypes. Je m'assure que chaque projet est 
                      esthétiquement plaisant et intuitif pour l'utilisateur.
                      </p>
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    En savoir plus{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>

              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Développement &amp; Implémentation </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Développement web fullstack </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      Création de sites web complets et performants, de la conception front-end à la mise en place 
                      back-end, en utilisant des technologies modernes telles que React et PHP/Symfony.{" "}
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    En savoir plus{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Optimisation &amp; Support </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Optimisation des performances web </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      Améliorer la vitesse et les performances des sites web, en optimisant le code, 
                      les images et les ressources pour offrir une meilleure expérience utilisateur.{" "}
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    En savoir plus{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Optimisation &amp; Support </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> SEO et marketing numérique </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                      Améliorer la visibilité des sites web sur les moteurs de recherche grâce à des 
                      stratégies de référencement naturel (SEO).
                      </p>
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    En savoir plus{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Optimisation &amp; Support </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Maintenance et support technique </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                      Assurer la maintenance continue de sites web, résoudre les problèmes techniques et fournir un support 
                      technique pour garantir un fonctionnement fluide et sans interruption.
                      </p>
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    En savoir plus{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Optimisation &amp; Support </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Administration de serveurs </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      Gestion et maintenance, surveillance des performances, configuration des environnements, 
                      automatisation avec des scripts Shell, et mise en œuvre de la sécurité.{" "}
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    En savoir plus{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Formation &amp; Conseil </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Présentations professionnelles </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                      Création de présentations visuellement attrayantes et engageantes pour divers besoins professionnels, 
                      en utilisant des outils comme PowerPoint ou Genially et des techniques de storytelling visuel.
                      </p>
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    En savoir plus{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Formation &amp; Conseil </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Formation et ateliers </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                      Organisation de courtes sessions de formation et d'ateliers sur des sujets variés tels que le numérique en général et l'utilisation de logiciels spécifiques.
                      </p>
                    </div>
                  </div>
                  <a href="#contact-section" className="lnk">
                    {" "}
                    En savoir plus{" "}
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>


              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Services </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="skills-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Compétences professionnelles </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> mes <b>talents</b> </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name"><span>Microsoft Power Platform</span></h6>
                  <div className="text">
                    <p>Développement de solutions automatisées et personnalisées avec Power Apps, Power Automate et Power BI pour améliorer l'efficacité et la productivité.</p>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: '10%' }}><span /></div>
                  </div>
                  <div className="value">
                    <span className="num">10<span>%</span></span>
                  </div>
                </div>
              </div>
              
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name"><span>HTML/CSS</span></h6>
                  <div className="text">
                    <p>Création de pages web réactives et esthétiques en utilisant HTML, CSS et des frameworks comme Bootstrap et Tailwind pour un design moderne et mobile-first.</p>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: '95%' }}><span /></div>
                  </div>
                  <div className="value">
                    <span className="num">95<span>%</span></span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name"><span>JavaScript (React)</span></h6>
                  <div className="text">
                    <p>Développement d'applications web dynamiques et interactives avec JavaScript et le framework React, en mettant l'accent sur les composants réutilisables et la gestion de l'état.</p>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: '75%' }}><span /></div>
                  </div>
                  <div className="value">
                    <span className="num">75<span>%</span></span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name"><span>PHP (Symfony, Laravel)</span></h6>
                  <div className="text">
                    <p>Développement de back-ends robustes et sécurisés avec PHP, en utilisant les frameworks Laravel et Symfony, le moteur de templates Twig et l'ORM Doctrine pour une gestion efficace des données.</p>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: '75%' }}><span /></div>
                  </div>
                  <div className="value">
                    <span className="num">75<span>%</span></span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name"><span>SQL & NoSQL</span></h6>
                  <div className="text">
                    <p>Conception et gestion de bases de données relationnelles et non relationnelles, incluant la modélisation des données, l'optimisation des requêtes pour des performances accrues, et la mise en place de stratégies de sauvegarde pour garantir l'intégrité et la disponibilité des données.</p>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: '70%' }}><span /></div>
                  </div>
                  <div className="value">
                    <span className="num">70<span>%</span></span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name"><span>Design & maquettage (Figma, Canva, Whimsical)</span></h6>
                  <div className="text">
                    <p>Création de designs intuitifs et de maquettes fonctionnelles pour des interfaces utilisateur avec des outils comme Figma, Canva et Whimsical, favorisant une expérience utilisateur optimale.</p>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: '70%' }}><span /></div>
                  </div>
                  <div className="value">
                    <span className="num">70<span>%</span></span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name"><span>Pack Office</span></h6>
                  <div className="text">
                    <p>Maîtrise des outils Microsoft Office (Word, Excel, PowerPoint) pour la création de documents professionnels, l'analyse de données et la préparation de présentations.</p>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: '85%' }}><span /></div>
                  </div>
                  <div className="value">
                    <span className="num">85<span>%</span></span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name"><span>Git & Github</span></h6>
                  <div className="text">
                    <p>Utilisation de Git pour le contrôle de version et la gestion du code source, et de GitHub pour la collaboration et le partage de projets de développement.</p>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: '90%' }}><span /></div>
                  </div>
                  <div className="value">
                    <span className="num">90<span>%</span></span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name"><span>Utilisation d'IA génératives</span></h6>
                  <div className="text">
                    <p>Application de technologies d'intelligence artificielle génératives pour créer du contenu, automatiser des tâches et améliorer les processus créatifs et décisionnels.</p>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: '60%' }}><span /></div>
                  </div>
                  <div className="value">
                    <span className="num">60<span>%</span></span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name"><span>Shell</span></h6>
                  <div className="text">
                    <p>Automatisation de tâches et gestion des systèmes via des scripts Shell, permettant une administration efficace des serveurs et des environnements de développement.</p>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: '55%' }}><span /></div>
                  </div>
                  <div className="value">
                    <span className="num">55<span>%</span></span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name"><span>Docker</span></h6>
                  <div className="text">
                    <p>Utilisation de Docker pour la conteneurisation et le déploiement d'applications, garantissant portabilité et scalabilité.</p>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: '50%' }}><span /></div>
                  </div>
                  <div className="value">
                    <span className="num">50<span>%</span></span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-item scrolla-element-anim-1 scroll-animate" data-animate="active">
                  <h6 className="name"><span>Méthodes agiles</span></h6>
                  <div className="text">
                    <p>Application des principes et pratiques agiles (Scrum, Kanban) pour la gestion de projets, favorisant l'amélioration continue, la collaboration et la livraison rapide de valeur.</p>
                  </div>
                  <div className="dots">
                    <div className="dot" style={{ width: '95%' }}><span /></div>
                  </div>
                  <div className="value">
                    <span className="num">95<span>%</span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  mes <b>projets</b>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Resume */}
      <Resume />

      {/* Section - Contacts */}
      <section className="lui-section lui-gradient-bottom" id="contact-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Contactez-moi </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  Discutons de <b>vos projets</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="lui-contacts v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="numbers-items">
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-map" />
                    </div>
                    <div className="title">
                      <span> Adresse </span>
                    </div>
                    <div className="lui-text">
                      <span> 22 rue Primo Lévi, Strasbourg </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-user" />
                    </div>
                    <div className="title">
                      <span> Open to Work </span>
                    </div>
                    <div className="lui-text">
                      <span> Freelance, alternance & CDI  </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-envelope" />
                    </div>
                    <div className="title">
                      <span> Email </span>
                    </div>
                    <div className="lui-text">
                      <span> tracy.bachmann68@gmail.com </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-address-book" />
                    </div>
                    <div className="title">
                      <span> Téléphone </span>
                    </div>
                    <div className="lui-text">
                      <span> 07.71.01.51.60 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div
                  className="contacts-form scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-1.png)",
                    }}
                  />
                  <div className="contacts-form">
                    <form onSubmit={(e) => e.preventDefault()} id="cform">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Votre nom complet <b>*</b>
                              <input type="text" name="name" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Votre adresse email <b>*</b>
                              <input type="email" name="email" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Sujet de l'email <b>*</b>
                              <input type="text" name="subject" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Votre message <b>*</b>
                              <textarea name="message" defaultValue={""} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                          <div className="terms-label">
                            * Acceptez les termes et conditions.
                          </div>
                          <a
                            href="#"
                            className="btn"
                            onclick="$('#cform').submit(); return false;"
                          >
                            <span>Envoyer mon message</span>
                          </a>
                        </div>
                      </div>
                    </form>
                    <div className="alert-success" style={{ display: "none" }}>
                      <p>Votre message a été envoyé avec succès, je reviens vers vous aussi vite que possible !</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Contactez moi </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
