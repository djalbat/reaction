"use strict";

import React from "../../react";

const Comment = React.createClass({
  render: function(update) {
    return (

      <div className="comment">
        <p>
          {this.props.message}
        </p>
      </div>

    );
  },

  componentDidMount: function() {
    const message = this.props.message;

    console.log(`Comment mounted with message: '${message}'.`)
  },

  componentWillUnmount: function() {
    const message = this.props.message;

    console.log(`Comment unmounted with message: '${message}'.`)
  }
});

export default Comment;
