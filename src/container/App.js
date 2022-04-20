import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import Errorboundry from "../components/Errorboundry";
import "tachyons";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  handleSearch = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }
  render() {
    const { robots, searchfield } = this.state;
    const filterArr = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc m2">Loading...</h1>
    ) : (
      <div className="tc App">
        <h1 className="f1">RoboFriends</h1>
        <Searchbox handleSearch={this.handleSearch} />
        <Scroll>
          <Errorboundry>
            <Cardlist robots={filterArr} />
          </Errorboundry>
        </Scroll>
      </div>
    );
  }
}
export default App;
