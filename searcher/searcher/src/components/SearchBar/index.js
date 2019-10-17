import React from "react";
import { connect } from "react-redux";
import { Search, SearchGoogle } from "../../actions";
import "./style.css";

class SearchBar extends React.Component {
  handleKey = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.target.value) {
        this.props.Search(e.target.value);
        this.props.SearchGoogle(e.target.value);
      }
    }
  };

  render() {
    return (
      <div id="searchbar">
        <b>Searcher App</b>
        <form>
          <input onKeyDown={this.handleKey} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

export default connect(
  mapStateToProps,
  { Search, SearchGoogle }
)(SearchBar);
