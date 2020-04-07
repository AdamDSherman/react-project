import React, { PureComponent } from "react";
import Header from "./components/Header/";
import SearchForm from "./components/SearchForm/";
import SearchResults from "./components/SearchResults/";
import SearchFilter from "./components/SearchFilter/";
import './App.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredIcon: SearchFilter("", 20)
    };
  }

  // handleSearchChange = event => {
  //   this.setState({
  //     filteredEmoji: filterEmoji(event.target.value, 20)
  //   });
  // };

  render() {
    return (
      <div>
        <Header />
        <SearchForm />
        <SearchResults />
      </div>
    );
  }
}
