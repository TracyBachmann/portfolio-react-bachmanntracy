import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotopeList = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box works-list">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            Tout
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-developpement-web"
            )}`}
            onClick={handleFilterKeyChange("sorting-developpement-web")}
            data-href=".sorting-developpement-web"
          >
            Développement web
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-design")}`}
            onClick={handleFilterKeyChange("sorting-design")}
            data-href=".sorting-design"
          >
            Design
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-gestion-de-donnees"
            )}`}
            onClick={handleFilterKeyChange("gestion-de-donnees")}
            data-href=".sorting-gestion-de-donnees"
          >
            Gestion de données
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-automatisation"
            )}`}
            onClick={handleFilterKeyChange("sorting-automatisation")}
            data-href=".sorting-automatisation"
          >
            Automatisation
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-gestion-de-projet"
            )}`}
            onClick={handleFilterKeyChange("sorting-gestion-de-projet")}
            data-href=".sorting-gestion-de-projet"
          >
            Gestion de projet
          </a>

        </div>
        <div className="works-items works-list-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/celicieux.png"
                        alt="Zorro"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
              <span className="category"> Développement web, Design, Gestion de données, Gestion de projet </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Célicieux</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Un site de recette spécialisé pour les personnes souffrant d'allergies ou d'intolérances alimentaires, 
                  avec un espace utilisateur et un espace administrateur complet
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">Plus d'infos</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-2">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/onews.png"
                        alt="Gooir"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Développement web </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-2">
                    <a>oNews</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Une plateforme dynamique pour un journal étudiant fictif, offrant des pages d'articles dédiées et une gestion efficace des contenus via des templates PHP.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-2">
                  <a className="lnk">Plus d'infos</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-3">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/tripodvisor.png"
                        alt="Explore"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Développement web </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-3">
                    <a>Trip O'dvisor</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Un site de conseils touristiques interactif avec avis, guides et bons plans, permettant aux utilisateurs de partager leurs expériences et d'obtenir des recommandations personnalisées
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-3">
                  <a className="lnk">Plus d'infos</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-4">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/oblog.png"
                        alt="Mozar"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Développement web </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-4">
                    <a>O'Blog</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Un blog client avec affichage des catégories et auteurs, gestion des liens internes, et structuration des données via des classes PHP pour un site interactif et bien organisé.                  </p>
                </div>
                <Link legacyBehavior href="/work-single-4">
                  <a className="lnk">Plus d'infos</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-5">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/ocaffe.png"
                        alt="Stay Fit"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Développement web </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-5">
                    <a>oCaffe</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Un site vitrine pour un coffee shop, mettant en avant les produits artisanaux de qualité et 
                  l'origine locale des ingrédients, avec des informations détaillées sur les cafés, thés et pâtisseries proposés.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-5">
                  <a className="lnk">Plus d'infos</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-6">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/oshop.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Développement web, Gestion de données</span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-6">
                    <a>oShop</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Une boutique en ligne de chaussures regroupant plusieurs marques indépendantes, 
                  offrant une navigation fluide entre les catégories, types de produits et marques, 
                  avec une gestion du panier et un back-office pour les administrateurs.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-6">
                  <a className="lnk">Plus d'infos</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-7">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/advertizr.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Développement web</span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-7">
                    <a>Advertizr</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Un système permettant de créer des bandeaux publicitaires interactifs avec un clavier virtuel. 
                  Le site permet de configurer les messages affichés en temps réel sur les bandeaux.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-7">
                  <a className="lnk">Plus d'infos</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-8">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/osoundboard.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Développement web</span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-8">
                    <a>O'Soundboard</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Une application où chaque bouton déclenche un son spécifique. 
                  Les utilisateurs peuvent appuyer sur les "pads" pour jouer des sons et 
                  même contrôler les pads à partir du clavier pour une expérience interactive et amusante.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-8">
                  <a className="lnk">Plus d'infos</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-9">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/todolist.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Développement web, Gestion de données</span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-9">
                    <a>ToDo List</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Une application de gestion de tâches développée avec le framework Laravel, 
                  permettant aux utilisateurs de créer, suivre et gérer leurs tâches facilement, 
                  avec une interface claire et des fonctionnalités robustes.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-9">
                  <a className="lnk">Plus d'infos</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-10">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/pomodoro.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Développement web</span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-10">
                    <a>Pomodor'O</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Une application web basée sur la méthode Pomodoro pour gérer efficacement le temps de travail. 
                  L'application utilise des minuteurs de 25 minutes pour le travail, 
                  suivis de courtes pauses, afin d'améliorer la concentration et la productivité.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-10">
                  <a className="lnk">Plus d'infos</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single-11">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/oflix.png"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Développement web, Gestion de données</span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single-11">
                    <a>O'flix</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Un site pour répertorier des films et séries, 
                  permettant aux utilisateurs de naviguer entre les pages d'accueil, 
                  de film/série, de favoris et de recherche, avec une intégration dynamique et 
                  un design inspiré d'Allociné et Netflix.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single-11">
                  <a className="lnk">Plus d'infos</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PortfolioIsotopeList;
