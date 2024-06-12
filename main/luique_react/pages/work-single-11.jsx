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
              <span>O'flix</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Développement web, Gestion de données</span>
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
                      <span>2024</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technologies :</span>
                    <strong>
                      <span>HTML, CSS, JavaScript, PHP, Symfony, Twig, SQL</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Catégories :</span>
                    <strong>
                      <span>Développement web, Gestion de données</span>
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
                  "url(/assets/images/oflix.png)",
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
                  O'flix est un site que j'ai développé pour répertorier des films et séries, permettant aux utilisateurs de naviguer entre les pages d'accueil, de film/série, de favoris et de recherche. L'objectif était de créer une plateforme attrayante et fonctionnelle inspirée des designs et des fonctionnalités d'Allociné et de Netflix.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  Les utilisateurs peuvent parcourir une vaste collection de films et de séries, ajouter des titres à leurs favoris, rechercher des films et des séries, et consulter des informations détaillées sur chaque titre. J'ai également intégré une section dédiée aux favoris où les utilisateurs peuvent facilement accéder à leurs films et séries préférés.
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
                        href="assets/images/oflix-ex1.png"
                        className="has-popup-image"
                      >
                        <img
                          decoding="async"
                          src="assets/images/oflix-ex1.png"
                          alt="Item 1"
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="works-item">
                      <div
                        className="image scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <div className="img">
                          <a href="assets/images/oflix-ex2.png" className="has-popup-image">
                            <img
                              decoding="async"
                              src="assets/images/oflix-ex2.png"
                              alt="Item 2"
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
                  Pour développer O'flix, j'ai utilisé le framework Symfony pour gérer le back-end et la logique de l'application. L'intégration HTML/CSS assure une présentation attrayante et immersive, avec une interface utilisateur intuitive et responsive. J'ai également mis en place des fonctionnalités de recherche et de filtrage puissantes pour aider les utilisateurs à trouver rapidement les titres qu'ils recherchent.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  O'flix offre une expérience utilisateur fluide et agréable, facilitant la navigation entre les films et les séries. Ce projet a démontré ma capacité à développer des solutions web complexes et à gérer efficacement les données utilisateur. Il a également mis en avant mes compétences en développement back-end et en conception UX/UI, essentielles pour le succès de tout site de streaming.
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
            <Link legacyBehavior href="/work-single">
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
                  <span>Célicieux</span>
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
