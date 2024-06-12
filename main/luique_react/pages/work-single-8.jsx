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
              <span>Advertizr</span>
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
                      <span>2024</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technologies :</span>
                    <strong>
                      <span>HTML, CSS, JavaScript</span>
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
                  "url(/assets/images/advertizr.png)",
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
                Advertizr est un système que j'ai créé pour permettre la création de bandeaux publicitaires interactifs avec un clavier virtuel. Le site permet de configurer et d'afficher des messages en temps réel, offrant une solution publicitaire flexible et moderne.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                Les utilisateurs peuvent cliquer sur les touches du clavier virtuel pour ajouter des lettres et des mots au message affiché. Le site gère les majuscules, la touche retour et permet de changer la couleur du texte affiché. J'ai également inclus des fonctionnalités permettant de personnaliser les messages selon les besoins des utilisateurs.
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
                J'ai utilisé JavaScript pour gérer l'interactivité du clavier virtuel et l'affichage des messages. L'intégration HTML/CSS assure une présentation attrayante, et le site est conçu pour être intuitif et facile à utiliser. Mon rôle a été crucial pour concevoir et développer une solution publicitaire efficace qui répond aux besoins des utilisateurs.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                Advertizr offre une solution publicitaire flexible et moderne, permettant aux utilisateurs de créer des messages interactifs en temps réel. Ce projet a démontré ma capacité à développer des solutions web innovantes et à gérer des projets complexes. Il a également mis en avant mes compétences en développement front-end et en gestion de contenu, essentielles pour le succès de tout projet de publicité en ligne.
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
            <Link legacyBehavior href="/work-single-9">
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
                  <span>O'Soundboard</span>
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
