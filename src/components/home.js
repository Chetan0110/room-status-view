import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllComments, addComment, deleteComment } from "../actions";
import CommentList from "./comment_list";
import CommentForm from "./comment_form";

/**
 * Home component which displays all the comments from all the users.
 * On navigating to "host:port/" route, this component will be displayed
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onAddComment = this.onAddComment.bind(this);
  }

  // Get all the comments before rendering this component
  componentWillMount() {
    // Action call
    this.props.fetchAllComments();
  }

  // Since this func is passes as callback to comment_form,
  // On enter or the Add button click,
  // Form gets submitted and the execution will come here.
  // So call action to add comment in the db
  onAddComment(values) {
    //Construct comment obj appropriately
    const comment = {
      parentCommentId: 0,
      author: this.props.active_user,
      content: values.contentcomment
    };

    //Action call
    this.props.addComment(comment);
  }

  render() {
    const formStyle = {
      width: "50%",
      marginLeft: "28%",
      marginBottom: "20px"
    };
    return (
      <div className="appDiv">
        <h2>Hello {this.props.active_user}!</h2>
        {this.props.comments ? (
          <CommentList
            comments={this.props.comments}
            active_user={this.props.active_user}
          />
        ) : null}

        <CommentForm
          placeholder="comment"
          onSubmit={this.onAddComment}
          formStyle={formStyle}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    active_user: state.commentData.active_user,
    comments: state.commentData.all_comments
  };
}
export default connect(mapStateToProps, {
  fetchAllComments,
  addComment,
  deleteComment
})(Home);
