import React from "react";
import { connect } from "react-redux";
import "./style.css";

class Result extends React.Component {
  state = { clicked: 0 };

  fillPhoto = () => {
    try {
      return (
        <img
          alt="imgm"
          src={
            this.props.searchresult.state.items[this.state.clicked].pagemap
              .cse_thumbnail[0].src
          }
          width={
            this.props.searchresult.state.items[this.state.clicked].pagemap
              .cse_thumbnail[0].width
          }
          height={
            this.props.searchresult.state.items[this.state.clicked].pagemap
              .cse_thumbnail[0].height
          }
        />
      );
    } catch (err) {}
  };

  fillResults = () => {
    try {
      document.getElementById("next").style.display = "flex";
      document.getElementById("prev").style.display = "flex";
      return (
        <div>
          <h5>
            {this.props.searchresult.state.items[this.state.clicked].title}
          </h5>

          <h6>
            {this.props.searchresult.state.items[this.state.clicked].snippet}
            <a
              href={
                this.props.searchresult.state.items[this.state.clicked]
                  .formattedUrl
              }
            >
              &nbsp; Czytaj Więcej
            </a>
          </h6>
          <div id="photo">{this.fillPhoto()}</div>
        </div>
      );
    } catch (err) {
      return "";
    }
  };

  next = () => {
    try {
      if (this.state.clicked + 1 < this.props.searchresult.state.items.length) {
        this.setState({ clicked: this.state.clicked + 1 });
      }
    } catch (err) {}
  };

  prev = () => {
    try {
      if (this.state.clicked - 1 >= 0) {
        this.setState({ clicked: this.state.clicked - 1 });
      }
    } catch (err) {}
  };

  render() {
    return (
      <div>
        <div id="buttons">
          <div id="prev" onClick={this.prev}>
            poprzedni
          </div>
          <div id="next" onClick={this.next}>
            następny
          </div>
        </div>
        {this.fillResults()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    searchresult: state.searchresult
  };
};

export default connect(
  mapStateToProps,
  {}
)(Result);
