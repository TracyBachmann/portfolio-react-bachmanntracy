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
        <Layout pageClassName="portfolio-template">
            {/* Section Started Heading */}
            <section className="section section-inner started-heading">
                <div className="container">
                    <div className="m-titles align-left">
                        <h1
                            className="m-title splitting-text-anim-1 scroll-animate"
                            data-splitting="words"
                            data-animate="active"
                        >
                            <span>HelpdesQ</span>
                        </h1>
                        <div
                            className="m-subtitle splitting-text-anim-1 scroll-animate"
                            data-splitting="words"
                            data-animate="active"
                        >
                            <span>Gestion de données, Power Platform, DevOps & Infra</span>
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
                                            <span>2024–2025</span>
                                        </strong>
                                    </div>
                                    <div className="details-label">
                                        <span>Technologies :</span>
                                        <strong>
                      <span>
                        Power Platform (Power Apps Model-Driven, Power Pages,
                        Power Automate), Liquid, FetchXML, Azure DevOps
                      </span>
                                        </strong>
                                    </div>
                                    <div className="details-label">
                                        <span>Catégories :</span>
                                        <strong>
                      <span>
                        Gestion de données, Power Platform, DevOps & Infra
                      </span>
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section - Gallery (Intro Images) */}
            <div className="section section-inner">
                <div className="container">
                    <div className="m-gallery">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="works-item">
                                    <div className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div className="img">
                                            <a href="/assets/images/frontofficehelpdesq.png" className="has-popup-image">
                                                <img
                                                    decoding="async"
                                                    src="/assets/images/frontofficehelpdesq.png"
                                                    alt="Front Office HelpdesQ"
                                                    loading="lazy"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                <div className="works-item">
                                    <div className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div className="img">
                                            <a href="/assets/images/pipelines.png" className="has-popup-image">
                                                <img
                                                    decoding="async"
                                                    src="/assets/images/pipelines.png"
                                                    alt="Pipelines HelpdesQ"
                                                    loading="lazy"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="works-item">
                                    <div className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div className="img">
                                            <a href="/assets/images/backofficehelpdesq.png" className="has-popup-image">
                                                <img
                                                    decoding="async"
                                                    src="/assets/images/backofficehelpdesq.png"
                                                    alt="Back Office HelpdesQ 1"
                                                    loading="lazy"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="works-item">
                                    <div className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div className="img">
                                            <a href="/assets/images/backofficehelpdesq2.png" className="has-popup-image">
                                                <img
                                                    decoding="async"
                                                    src="/assets/images/backofficehelpdesq2.png"
                                                    alt="Back Office HelpdesQ 2"
                                                    loading="lazy"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div className="works-item">
                                    <div className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div className="img">
                                            <a href="/assets/images/backofficehelpdesq3.png" className="has-popup-image">
                                                <img
                                                    decoding="async"
                                                    src="/assets/images/backofficehelpdesq3.png"
                                                    alt="Back Office HelpdesQ 3"
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

            {/* Section - Concept & fonctionnalités + Gallery Examples */}
            <section className="section section-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="post-content">
                                <h4>Concept & fonctionnalités</h4>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="post-content">
                                <p>
                                    HelpdesQ est un outil de ticketing développé sur Power Platform,
                                    combinant une application model-driven pour les consultants et
                                    un portail Power Pages pour les clients. Les clients peuvent
                                    consulter leurs contrats, créer des tickets, nommer des
                                    contributeurs, communiquer avec les consultants et envoyer des
                                    pièces jointes.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="post-content">
                                <p>
                                    Les consultants peuvent gérer le cycle de vie complet des tickets
                                    (création, résolution, approbation, notation), créer des
                                    contrats, comptes et contacts. Power Automate est utilisé pour
                                    automatiser les notifications et les workflows liés aux tickets
                                    et aux contrats.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Inline Gallery right after the text */}
                    <div className="m-gallery" style={{ marginTop: "40px" }}>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="works-item">
                                    <div className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div className="img">
                                            <a href="/assets/images/helpdesq-ex1.png" className="has-popup-image">
                                                <img
                                                    decoding="async"
                                                    src="/assets/images/helpdesq-ex1.png"
                                                    alt="HelpdesQ Screenshot 1"
                                                    loading="lazy"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="works-item">
                                    <div className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                                        <div className="img">
                                            <a href="/assets/images/helpdesq-ex2.png" className="has-popup-image">
                                                <img
                                                    decoding="async"
                                                    src="/assets/images/helpdesq-ex2.png"
                                                    alt="HelpdesQ Screenshot 2"
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
            </section>

            {/* Section - Conception & impact */}
            <section className="section section-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="post-content">
                                <h4>Conception & impact</h4>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="post-content">
                                <p>
                                    J'ai conçu des pipelines Power Apps pour le déploiement des
                                    solutions, ainsi que des pipelines Azure DevOps spécifiques au
                                    portail Power Pages. Un travail de développement spécialisé a
                                    été réalisé sur Power Pages avec Liquid et FetchXML pour
                                    personnaliser les interfaces et les requêtes.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="post-content">
                                <p>
                                    Ce projet démontre ma capacité à mettre en œuvre des solutions
                                    professionnelles sur Power Platform, à automatiser les
                                    processus critiques via Power Automate, et à assurer un
                                    déploiement structuré et sécurisé avec Azure DevOps. Il
                                    illustre également mes compétences en conception
                                    d'applications orientées utilisateur et en gestion de données
                                    complexes.
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
                  <span>À définir</span>
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
