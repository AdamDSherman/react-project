import React, { PureComponent } from "react";
import PropTypes from "prop-types";
// import Clipboard from "clipboard";

import SearchResultsRow from "./components/SearchResultsRow/";

export default class SearchResults extends PureComponent {
  static propTypes = {
    iconData: PropTypes.array
  };

  // componentDidMount() {
  //   this.clipboard = new Clipboard(".copy-to-clipboard");
  // }

  // componentWillUnmount() {
  //   this.clipboard.destroy();
  // }

  render() {
    return (
      <div className="component-emoji-results">
        {this.props.iconData.map(iconData => (
          <SearchResultsRow
            name={iconData.name}
          />
        ))}
      </div>
    );
  }
}
