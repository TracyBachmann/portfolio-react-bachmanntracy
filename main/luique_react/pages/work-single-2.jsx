import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";
const WorkSingleISotope = dynamic(
  () => import("../src/components/WorkSingleISotope"),
  {
    ssr: false,
  }
);
const WorkSingle = () => {
  const [videoToggle, setVideoToggle] = useState(false);
  return (
    <Layout pageClassName={"portfolio-template"}>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        {/* Heading */}
        <div className="container">
          <div className="m-titles align-left">
            <h1
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>oNews</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Développement web</span>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="v-line v-line-right v-line-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className="m-details">
                  <div className="details-label">
                    <span>Fait en :</span>
                    <strong>
                      <span>2023</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technologies :</span>
                    <strong>
                      <span>HTML, CSS, PHP</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Catégories :</span>
                    <strong>
                      <span>Développement web</span>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Image */}
      <div className="section section-inner">
        {/* Image */}
        <div className="m-image-large">
          <div className="image">
            <div
              className="img js-parallax"
              style={{
                backgroundImage:
                  "url(/assets/images/onews.png)",
              }}
            />
          </div>
        </div>
      </div>
      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
                <h4>Concept & fonctionnalités</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                oNews est une plateforme dynamique que j'ai développée pour servir de journal étudiant fictif. Mon objectif était de créer un espace où les étudiants peuvent accéder à des actualités pertinentes et à des articles intéressants, tout en offrant aux administrateurs un outil puissant pour gérer le contenu.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                Chaque article sur oNews dispose de sa propre page dédiée, permettant une lecture immersive. J'ai intégré des fonctionnalités permettant aux utilisateurs de naviguer facilement entre différentes catégories d'articles. Les administrateurs disposent de templates PHP pour gérer et organiser efficacement le contenu, garantissant une mise à jour rapide et simple des articles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Gallery */}
      <div className="section section-inner">
        <div className="container">
          {/* Section Gallery */}
          <div className="m-gallery">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="works-item">
              <div
                className="image scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="img">
                  <a
                    href="assets/images/onews-ex1.png"
                    className="has-popup-image"
                  >
                    <img
                      decoding="async"
                      src="assets/images/onews-ex1.png"
                      alt="Item 1"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      
      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
                <h4>Conception & impact</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                Pour le développement de oNews, j'ai utilisé PHP pour gérer les templates dynamiques et une intégration HTML/CSS pour assurer une présentation visuellement cohérente et attrayante. J'ai également mis en place un système de gestion de contenu robuste permettant aux administrateurs de publier, modifier et supprimer des articles facilement. 
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                oNews offre une interface utilisateur intuitive et une expérience de lecture agréable. Le site a été conçu pour être facilement navigable, permettant aux étudiants de rester informés des dernières actualités et événements scolaires. Ce projet a mis en évidence mes compétences en développement web et en gestion de contenu, ainsi que ma capacité à créer des solutions efficaces pour des besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href="/work-single-3">
              <a>
                <span
                  className="nav-arrow scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Projet suivant :</span>
                </span>
                <span
                  className="h-title splitting-text-anim-2 scroll-animate"
                  data-splitting="chars"
                  data-animate="active"
                >
                  <span>Trip O'dvisor</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WorkSingle;
