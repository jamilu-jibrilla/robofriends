import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import Errorboundry from "../components/Errorboundry";
import "tachyons";
import "./App.css";
import {setSearchField, requestRobots} from "../actions";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.getRobots.robots,
    isPending: state.getRobots.isPending,
    error: state.getRobots.error    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}
class App extends Component {
 
  componentDidMount() {
    this.props.onRequestRobots()
  }
  render() {
    const { searchField, onSearchChange, robots, isPending} = this.props
    const filterArr = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1 className="tc m2">Loading...</h1>
    ) : (
      <div className="tc App">
        <h1 className="f2">RoboFriends</h1>
        <Searchbox handleSearch={onSearchChange} />
        <Scroll>
          <Errorboundry>
            <Cardlist robots={filterArr} />
          </Errorboundry>
        </Scroll>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
