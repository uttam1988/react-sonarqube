import React, { Component } from "react";
import "./App.css";
import { UserDetails } from "./UserDetails";
import { HeaderSection } from "./HeaderSection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      userId: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value, name) {
    this.setState({
      [name]: value
    });
  }

  render() {
    const { userId, department } = this.state;
    const {
      departments,
      users = {},
      getUserDetails,
      clearUserDetails
    } = this.props;
    return (
      <div className="App">
        <h1> Employee details </h1>
        <HeaderSection
          users={users}
          userId={userId}
          department={department}
          departments={departments}
          handleChange={this.handleChange}
          getUserDetails={getUserDetails}
          clearUserDetails={clearUserDetails}
        />
        <UserDetails
          user={users.selectedUser}
          loading={users.loading}
          error={users.error}
        />
      </div>
    );
  }
}

export default App;
