import React, { PureComponent } from "react";
import Header from "./components/Header/";
//import SearchForm from "./components/SearchForm/";
//import SearchResults from "./components/SearchResults/";
//import SearchFilter from "./components/SearchFilter/";
import {icons as iconList } from './services/iconList';
//import iconList from './services/iconList5';
import './App.css';


export default class App extends PureComponent {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render() {
    const items = iconList.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
        <div>
          <ul>
            <li>
              <span>{data.name}</span>
              <i className="fa">{data.unicode}</i>
              <i className={"fab fa-" + data.id}></i>
            </li>
          </ul>
        </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}
