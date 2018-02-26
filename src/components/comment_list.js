import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteComment } from "../actions";
import UserComment from "./user_comment";

/**
 * This component iterate through all the comments provided by Home component
 * and sends one by one them to UserComment component for them to be rendered
 */
class CommentList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  // This func is passes as callback to UserComment comp.
  // On click of delete link of the component, this func gets invoked.
  // Call the deleteComment action to delete the comment from the db.
  onDeleteClick(commentId) {
    //Action call
    this.props.deleteComment(commentId);
  }

  render() {
    let style = {
      width: "50%",
      height: "50%",
      marginLeft: "25%",
      overflow: "auto"
    };

    if (this.props.reply) style = { width: "inherit" };
    return (
      <div style={style}>
        <ul>
          {this.props.comments.map((comment, i) => (
            <UserComment
              key={i}
              comment={comment}
              onDelete={this.onDeleteClick}
            />
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { active_user: state.commentData.active_user };
}

export default connect(mapStateToProps, { deleteComment })(CommentList);
