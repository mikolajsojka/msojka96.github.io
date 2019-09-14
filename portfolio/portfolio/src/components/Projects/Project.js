import React from "react";
import "./Project.css";
import ReactHtmlParser from "react-html-parser";
import AOS from "aos";
import "aos/dist/aos.css";

class Project extends React.Component {
  state = { list: "", presentation: "" };
  componentDidMount() {
    console.log(this.props.technology);
    let temp = "<ul>";
    this.props.technology.map(element => {
      temp += `<li><b>${element}</b></li>`;
    });
    temp += "</ul>";
    this.setState({ list: temp });

    if (this.props.presentation === "iframe") {
      temp = `<iframe
            id=${this.props.alt}
            type="text/html"
            width="100%"
            height="100%"
            src=${this.props.src}
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen"
            frameborder="0"
          />`;

      this.setState({ presentation: temp });
    }
    if (this.props.presentation === "image") {
      temp = `<img
      src=${this.props.src}
      id=${this.props.id}
      width="100%"
      height="100%"
      alt=${this.props.alt}
    />`;

      this.setState({ presentation: temp });
    }
  }

  render() {
    AOS.init();
    return (
      <a href={this.props.href}>
        <div className="project">
          <div className="presentation">
            {ReactHtmlParser(this.state.presentation)}
          </div>
          <div className="description">
            <h4>{this.props.title}</h4>
            <p>{this.props.description}</p>
            {ReactHtmlParser(this.state.list)}
          </div>
        </div>
      </a>
    );
  }
}

export default Project;
