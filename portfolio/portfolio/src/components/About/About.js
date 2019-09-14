import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

class About extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="about" id="A2" data-aos={this.props.direction}>
        <div id="about">
          <img src="me.jpg" id="me" alt="me"></img>
        </div>

        <div id="life">
          <br />
          Mam 22 lata. Ukończyłem kierunek licencjacki: <b>informatyka</b> na
          wydziale MFI na Uniwesytecie Gdańskim ze specjalizacją:{" "}
          <b>aplikacje internetowe i bazy danych</b>. Interesuję się naprawą
          urządzeń elektronicznych , jazdą wyczynową na rolkach, jazdą wyczynową
          na łyżwach, sportem oraz słuchaniem muzyki. Dodatkową przyjemność
          sprawia mi tworzenie aplikacji internetowych.
        </div>

        <div id="skills">
          <br />
          Umiejętności :
          <ul>
            <li>
              <b>Javascript</b>, wraz z Dom Api, Jquery oraz Ajax
            </li>
            <li>ReactJS, wraz z Redux oraz Vue, wraz z Vuex</li>
            <li>Html, CSS, Less</li>
            <li>ExpressJS</li>
            <li>Znajomość systemu Linux oraz Git.</li>
            <li>Biegła obsługa programów: Excel oraz Word.</li>
            <li>
              Dodatkowo podczas studiowania miałem kontakt z językami: C, Java,
              C++, Ruby, Assembler, C#, batch, SQL, PostgreSQL.
            </li>
          </ul>
          <b>UWAGA!: </b>
          <p>Poniżej znajdują się wybrane przeze mnie projekty wraz z przekierowaniami do ich repozytoriów.
          To portfolio zostało napisane w <b>ReactJS</b>.</p><br />
         
        </div>
      </div>
    );
  }
}

export default About;
