import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Titre Professionnel (bac+2/3) Développeur Web et Web Mobile",
    academy: "O'clock",
    dec: "Formation en développement web et mobile ; titre passé le 06/06/2024 et résultats pas encore obtenus.",
    startYear: "2023",
    endYear: "2024",
  },
  {
    id: 2,
    title: "Autoformation sur le développement web",
    academy: "OpenClassrooms",
    dec: "Auto-apprentissage des bases du développement web (HTML, CSS & JavaScript).",
    startYear: "2022",
    endYear: "2023",
  },
  {
    id: 3,
    title: "Licence archéologie et histoire de l'art",
    academy: "UNISTRA",
    dec: "Études en archéologie et histoire de l'art, spécialité égyptologie et papyrologie.",
    startYear: "2020",
    endYear: "2022",
  },
  {
    id: 4,
    title: "Classe préparatoire littéraire",
    academy: "Lycée Fustel de Coulanges",
    dec: "Préparation intensive aux études littéraires.",
    startYear: "2020",
    endYear: "2020",
  },
  {
    id: 5,
    title: "Baccalauréat général Littéraire",
    academy: "Lycée Michel de Montaigne",
    dec: "Diplôme de fin d'études secondaires en littérature",
    startYear: "2020",
    endYear: "2017",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Formatrice sur le numérique",
    company: "Emmaus Connect",
    dec: "Équiper, connecter et accompagner les publics éloignés du numérique.",
    startYear: "2023",
    endYear: "2024",
  },
  {
    id: 2,
    title: "Responsable de l'accueil, guide et administratrice des BDD",
    company: "AMAM",
    dec: "Administration, acueil, surveillance, recherche et documentation au sein du musée de l'UNISTRA.",
    startYear: "2020",
    endYear: "2022",
  },
  {
    id: 3,
    title: "Divers jobs alimentaires",
    company: "RGIS, Gifi, ...",
    dec: "Inventoriste, équipière polyvalente, préparatrice de commandes, ...",
    startYear: "2020",
    endYear: "2024",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> CV </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                mon <b>parcours</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Éducation </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Expérience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> CV </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
