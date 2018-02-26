import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { addComment } from "../actions";

/**
 * This component creates the redux form and puts on input field
 * and a button for user to comment or reply
 */
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      content: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  renderField(field) {
    console.log("field", field);
    const { placeholder } = field;
    return (
      <div>
        <input
          className="form-control"
          placeholder={placeholder}
          {...field.input}
        />
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ content: event.target.value });
  }

  // First, this function gets invoked on submit of the form,
  // set the content of the input field here and
  // call the callback function to carry on other operations
  onFormSubmit(values) {
    //Callback function call
    this.props.onSubmit(values);
    //Set the state for input field content
    // this.setState({ content: "" });
  }
  render() {
    const { handleSubmit } = this.props;

    let formStyle = {
      marginBottom: "10px"
    };

    if (this.props.formStyle) formStyle = this.props.formStyle;

    const placeholder = `Enter your ${this.props.placeholder}...`;
    let name = `content${this.props.placeholder}`;
    if (this.props.placeholder === "reply")
      name = name + this.props.parentCommentId;

    return (
      <form
        onSubmit={handleSubmit(this.onFormSubmit)}
        className="input-group"
        style={formStyle}
      >
        <Field
          placeholder={placeholder}
          name={name}
          // value={this.state.content}
          component={this.renderField}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </span>
      </form>
    );
  }
}

export default reduxForm({
  form: "CommentForm"
})(connect(null, { addComment })(CommentForm));
