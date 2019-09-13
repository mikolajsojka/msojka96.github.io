import React from "react";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NavigationIcon from "@material-ui/icons/Navigation";

class App extends React.Component {
  state = { classname: "start" };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  handleClick = e => {
    window.scrollTo(0, 0);
  };

  handleScroll = () => {
    if (window.scrollY !== 0) {
      this.setState({ classname: "update" });
    } else {
      this.setState({ classname: "start" });
    }
  };

  render = () => {
    return (
      <div className="app">
        <Header />
        <About direction="fade-right" />
        <Projects direction="fade-down" />

        <Contact />
        <NavigationIcon
          id="button_top"
          className={this.state.classname}
          onClick={this.handleClick}
        />

        <footer>© Copyright Mikołaj Sojka</footer>
      </div>
    );
  };
}

export default App;
