import React from "react";
import "./Projects.css";
import Project from "./Project";
import AOS from "aos";
import "aos/dist/aos.css";

class Projects extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div>
        <div className="projects" data-aos={this.props.direction} id="A1">
          <Project
            technology={[
              "HTML",
              "CSS/LESS",
              "BOOTSTRAP",
              "GOOGLE MAPS API",
              "RWD"
            ]}
            title="Strona domki Rewa"
            description="Niedokończone zlecenie mające być stroną-wizytówką domków letniskowych."
            image="./1.png"
            alt="domki rewa"
            presentation="image"
            src="./1.png"
            href="https://github.com/msojka96/msojka96.github.io/tree/master/strona_domki"
          />
          <Project
            technology={[
              "HTML",
              "CSS/LESS",
              "VUE oraz VUEX",
              "EXPRESS JS (BACKEND - własny serwer)",
              "SOCKET IO",
              "MONGO DB",
              "LOGOWANIE",
              "RWD"
            ]}
            title="Konkurs piękności koni Arabskich"
            description="Aplikacja zaliczeniowa przedmiotu Technologie Sieci Web na Uczelni. Symuluje prowadzenie zawodów online. "
            image="./2.png"
            alt="konie arabskie"
            id="horses"
            presentation="image"
            src="./2.png"
            href="https://github.com/msojka96/tsw/tree/master/project-horses"
          />
          <Project
            technology={[
              "HTML",
              "CSS/LESS",
              "MONGO DB",
              "EXPRESS JS (BACKEND - własny serwer)",
              "REACT JS oraz REDUX",
              "LOGOWANIE",
              "REJESTRACJA",
              "RWD"
            ]}
            title="FIT APP"
            description="Aplikacja służy do prowadzenia rejestrów kalorycznych - zjedzone kalorie/spalone kalorie. Pozwala obliczyć nasze zapotrzebowanie energetyczne. Aplikacja generuje
      na bieżąco raporty kaloryczne dla dowolnie wybranego okresu."
            image="./4.png"
            alt="fitapp"
            presentation="image"
            src="./4.png"
            href="https://github.com/msojka96/inf_exp/tree/master/fitApp"
          />
        </div>

        <div className="projects" data-aos={this.props.direction} id="A1">
          <Project
            technology={[
              "HTML",
              "CSS",
              "REACT JS oraz REDUX",
              "GOOGLE CUSTOM SEARCH API"
            ]}
            title="Wyszukiwarka"
            description="Aplikacja służy do wyszukiwania podanych fraz ze strony Wikipedia i wyświetlania wyników wyszukiwań. Aplikacja pozwala na wyszukanie 
            jednocześnie 10 wyników z danej frazy."
            image="./3.png"
            alt="wyszukiwarka"
            presentation="image"
            src="./3.png"
            href="https://github.com/msojka96/msojka96.github.io/tree/master/searcher"
          />

          <Project
            technology={["HTML", "CSS", "REACT JS", "RWD"]}
            title="Portoflio"
            description="Aplikacja Portfolio, na której państwo się obecnie znajdują."
            image="./5.jpg"
            alt="portfolio"
            presentation="image"
            src="./5.jpg"
            href="https://github.com/msojka96/msojka96.github.io/tree/master/portfolio"
          />
        </div>
      </div>
    );
  }
}

export default Projects;
