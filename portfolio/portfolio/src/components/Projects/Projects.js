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
            technology={["HTML", "CSS/LESS", "BOOTSTRAP", "GOOGLE MAPS API"]}
            title="Strona domki Rewa"
            description="Niedokończone zlecenie mające być stroną-wizytówką domków letniskowych."
            image="./1.png"
            alt="domki rewa"
            presentation="image"
            src="./1.png"
          />
          <Project
            technology={[
              "HTML",
              "CSS/LESS",
              "VUE oraz VUEX",
              "EXPRESS JS",
              "SOCKET IO",
              "MONGO DB",
              "LOGOWANIE"
            ]}
            title="Konkurs piękności koni Arabskich"
            description="Aplikacja zaliczeniowa przedmiotu Technologie Sieci Web na Uczelni. Symuluje prowadzenie zawodów online. "
            image="./2.png"
            alt="konie arabskie"
            presentation="image"
            src="./2.png"
          />
          <Project
            technology={[
              "HTML",
              "CSS/LESS",
              "MONGO DB",
              "EXPRESS JS",
              "REACT JS oraz REDUX",
              "LOGOWANIE",
              "REJESTRACJA"
            ]}
            title="FIT APP"
            description="Aplikacja służy do prowadzenia rejestrów kalorycznych - zjedzone kalorie/spalone kalorie. Pozwala obliczyć nasze zapotrzebowanie energetyczne. Aplikacja generuje
      na bieżąco raporty kaloryczne dla dowolnie wybranego okresu."
            image="./4.png"
            alt="fitapp"
            presentation="image"
            src="./4.png"
          />
        </div>
      </div>
    );
  }
}

export default Projects;
