import React, { Component } from "react";
import { connect } from "react-redux";

import { addComment, fetchAllComments } from "../actions";
import CommentForm from "./comment_form";
import CommentList from "./comment_list";

/**
 * This component renders the each comment which is sent to the component.
 * This component also create the instance of CommentList again
 * if the comment has replies to it.
 */
class UserComment extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      needToReply: false,
      viewReplies: false,
      comment_id: 0,
      all_replies: []
    };
    this.onReplyClick = this.onReplyClick.bind(this);
    this.onViewRepliesClick = this.onViewRepliesClick.bind(this);
    this.onReplyComment = this.onReplyComment.bind(this);
  }

  componentWillMount() {
    this.setState({
      ...this.state,
      comment_id: this.props.comment.id
    });
  }

  onViewRepliesClick() {
    this.setState({
      ...this.state,
      viewReplies: true
    });
  }

  // On click of reply link, set the state flag to true
  // to display the input field and a button
  // to enter the comment content
  onReplyClick() {
    this.setState({
      ...this.state,
      needToReply: true
    });
  }

  //On click of the button or on Enter key press,
  //this func gets invoked to construct the reply obj
  // and to call the action to add the reply in the db
  onReplyComment(values) {
    //Construct the reply obj appropriately
    const reply = {
      parentCommentId: this.state.comment_id,
      author: this.props.active_user,
      content: values["contentreply" + this.state.comment_id]
    };

    //Call the action
    this.props.addComment(reply);
  }

  render() {
    let paraStyle = {};
    // Give little and same amount of the indentation
    // for all the replies to the comment
    if (this.props.reply)
      paraStyle = {
        textIndent: "5px"
      };

    return (
      <div style={paraStyle}>
        <h4 style={{ color: "blue" }}>{this.props.comment.author}</h4>
        <p>{this.props.comment.content}</p>
        <div>
          {this.props.comment.author !== this.props.active_user ? (
            <a onClick={this.onReplyClick}>Reply </a>
          ) : null}
          {this.props.comment.author === this.props.active_user ? (
            <a onClick={() => this.props.onDelete(this.props.comment.id)}>
              Delete
            </a>
          ) : null}
          <br />
          {this.props.comment.replies.length > 1 ? (
            <u>
              <a onClick={this.onViewRepliesClick}>
                {this.props.comment.replies.length} Replies
              </a>
            </u>
          ) : null}
          {this.state.needToReply ? (
            <CommentForm
              placeholder="reply"
              onSubmit={this.onReplyComment}
              parentCommentId={this.state.comment_id}
            />
          ) : null}
          {this.state.viewReplies || this.props.comment.replies.length === 1 ? (
            <CommentList comments={this.props.comment.replies} reply={true} />
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    active_user: state.commentData.active_user
  };
}

export default connect(mapStateToProps, { addComment, fetchAllComments })(
  UserComment
);
