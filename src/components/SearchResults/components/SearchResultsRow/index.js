import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SearchResultsRow.css";

export default class SearchResultsRow extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <div className="component-emoji-result-row copy-to-clipboard">
        <span className="name">{this.props.name}</span>
        <span className="info">Click to copy</span>
      </div>
    );
  }
}
