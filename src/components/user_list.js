import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserList extends Component {
  onUserClick() {
    alert("User Clicked");
  }
  render() {
    const style = {
      width: "50%",
      height: "inherit",
      overflow: "auto",
      marginLeft: "20px"
    };
    const userItemStyle = {
      cursor: "pointer"
    };
    return (
      <div style={style}>
        <h3>All Users</h3>
        <ul className="list-group">
          {this.props.users.map(user => (
            <li
              key={user.name}
              className="list-group-item"
              style={userItemStyle}
            >
              <Link to={`/users/${user.name}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
