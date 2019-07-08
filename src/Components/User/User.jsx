import React, { Component } from "react";
import axios from "axios";

export default class User extends Component {
  state = { users: [], isLoading: true };

  componentDidMount() {
    axios
      .get("http://localhost/pptm/api/users", {})
      .then(response => {
        this.setState({ users: response.data.data, isLoading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    let { users, isLoading } = this.state;
    console.log(users);
    let loaderIcon = <div>Loading</div>;
    let renderableList = users.map((e, i) => {
      return (
        <p key={i} style={{ color: "white" }}>
          {e.user_id}
        </p>
      );
    });
    return (
      <div>
        {isLoading && loaderIcon}
        {!isLoading && renderableList}
      </div>
    );
  }
}
