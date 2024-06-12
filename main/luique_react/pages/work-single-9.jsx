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
              <span>O'Soundboard</span>
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
                    <span>Technologies  :</span>
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
                  "url(/assets/images/osoundboard.png)",
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
                O'Soundboard est une application interactive que j'ai développée où chaque bouton déclenche un son spécifique. L'objectif était de créer une application amusante et interactive où les utilisateurs peuvent jouer des sons en appuyant sur des "pads" virtuels.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                Les utilisateurs peuvent jouer des sons en appuyant sur les pads ou en utilisant le clavier. J'ai ajouté une fonctionnalité permettant de changer la couleur des pads lorsqu'ils sont joués, offrant une expérience visuelle et auditive enrichissante. L'application gère également les combinaisons de sons pour créer des mélodies et des rythmes uniques.
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
                J'ai utilisé JavaScript pour gérer les interactions utilisateur et le déclenchement des sons. L'intégration HTML/CSS assure une présentation attrayante et interactive, offrant une expérience utilisateur fluide et amusante. Mon rôle a été crucial pour concevoir une application qui non seulement divertit mais engage également les utilisateurs.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                O'Soundboard offre une expérience interactive unique, permettant aux utilisateurs de s'amuser en jouant des sons et en créant des mélodies. Ce projet a démontré ma capacité à développer des applications interactives et à gérer des projets complexes. Il a également mis en avant mes compétences en développement front-end et en conception UX/UI, essentielles pour le succès de tout projet interactif.
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
            <Link legacyBehavior href="/work-single-10">
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
                  <span>Pomodor'O</span>
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
