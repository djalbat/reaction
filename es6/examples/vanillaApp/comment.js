"use strict";

import React from "../../react";

const Comment = React.createClass({
  render: () => {
    return (

      <div className="comment">
        <p>
          {this.props.message}
        </p>
      </div>

    );
  },

  componentDidMount: () => {
    const message = this.props.message;

    console.log("Comment mounted with message: " + message)
  },

  componentWillUnmount: () => {
    const message = this.props.message;

    console.log("Comment unmounted with message: " + message)
  }
});

export default Comment;
